(function(babel, $, _, ace, window) {

  window.require = function (mod) {
    return window[mod];
  }

  window.underline = _.reduce(Object.keys(_), function (h, k) {
    h[k] = _.wrap(_[k], function (f) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return f.apply(undefined, [this].concat(args));
    });
    return h;
  }, {});

  /*
   * Long term storage for persistence of state/etc
   */
  function StorageService () {
    this.store = window.localStorage;
  }

  StorageService.prototype.get = function (key) {
    try {
      return JSON.parse(this.store.getItem(key));
    } catch(e) {}
  };

  StorageService.prototype.set = function (key, value) {
    try {
      this.store.setItem(key, JSON.stringify(value));
    } catch(e) {}
  };

  /*
   * Decorating the ACE editor
   */
  function Editor(selector) {
    this.$el = $(selector);
    this.editor = ace.edit(this.$el[0]);
    this.session = this.editor.getSession();
    this.document = this.session.getDocument();

    this.editor.setTheme('ace/theme/monokai');
    this.editor.setShowPrintMargin(false);
    this.$el.css({
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
      lineHeight: 'inherit'
    });

    this.session.setMode('ace/mode/javascript');
    this.session.setUseSoftTabs(true);
    this.session.setTabSize(2);
    this.session.setUseWorker(false);

    this.editor.setOption('scrollPastEnd', 0.33);
  }

  /*
   * Options exposed for the REPL that will influence Babel's transpiling
   */
  function $checkbox($element){
    return {
      get: function () {
        return $element.is(":checked");
      } ,
      set: function (value) {
        var setting = value !== 'false' && value !== false;
        $element.prop('checked', setting);
      },
      enumerable: true,
      configurable: false
    };
  }

  /*
   * Babel options for transpilation as used by the REPL
   */
  function Options () {
    return {
      experimental : true,
      loose : false,
      spec : false,
      evaluate : true
    };
  }

  /*
   * Babel Web REPL
   */
  function REPL () {
    this.storage = new StorageService();
    var state = this.storage.get('replState') || {};

    this.options = _.assign(new Options(), state);

    this.input = new Editor('#editor').editor;

    this.$errorReporter = $('.repl-console');
    this.$consoleReporter = $('.repl-console');
  }

  REPL.prototype.clearOutput = function () {
    this.$errorReporter.text('');
    this.$consoleReporter.text('');
  };

  REPL.prototype.printError = function (message) {
    this.$errorReporter.text(message);
  };

  REPL.prototype.getSource = function () {
    return this.input.getValue();
  };

  REPL.prototype.compile = function () {

    var transformed;
    var code = this.getSource();
    this.clearOutput();

    try {
      transformed = babel.transform(code, {
        stage: this.options.experimental ? 0 : 2,
        loose: this.options.loose && "all",
        optional: this.options.spec && ["es6.spec.templateLiterals", "es6.spec.blockScoping", "es6.spec.symbols"],
        filename: 'repl'
      });
    } catch (err) {
      this.printError(err.message);
      throw err;
    }

    if (this.options.evaluate) {
      this.evaluate(transformed.code);
    }
  };

  var capturingConsole;
  REPL.prototype.evaluate = function(code) {
    capturingConsole = Object.create(console);
    var $consoleReporter = this.$consoleReporter;
    var buffer = [];
    var error;
    var done = false;

    function flush() {
      $consoleReporter.text(buffer.join('\n'));
    }

    function write(data) {
      buffer.push(data);
      if (done) flush();
    }

    capturingConsole.clear = function() {
      buffer = [];
      flush();
    };

    capturingConsole.error = function () {
      error = true;
      capturingConsole.log.apply(capturingConsole, arguments);
    };

    capturingConsole.log = 
    capturingConsole.info = 
    capturingConsole.debug = function() {
      if (this !== capturingConsole) { return; }

      var args = Array.prototype.slice.call(arguments);
      Function.prototype.apply.call(console.log, console, args);

      var logs = args.reduce(function (logs, log) {
        if (typeof log === 'string') {
          logs.push(log);
        } else if (log instanceof Function) {
          logs.push(log.toString());
        } else {
          logs.push(JSON.stringify(log));
        }
        return logs;
      }, []);

      write(logs.join(' '));
    };

    try {
      new Function('console', code)(capturingConsole);
    } catch (err) {
      error = err;
      buffer.push(err.message);
    }

    done = true;
    flush();

    if (error) throw error;
  };

  REPL.prototype.persistState = function (state) {
    this.storage.set('replState', state);
  };

  /*
   * Initialize the REPL
   */
  var repl = new REPL();

  function onSourceChange () {
    var error;
    try {
      repl.compile();
    } catch(err) {
      error = err;
    }
    var code = repl.getSource();
    var state = _.assign(repl.options, {
      code: code
    });
    repl.persistState(state);
    if (error) throw error;
  }

  repl.input.on('change', _.debounce(onSourceChange, 500));

  repl.compile();



}(babel, $, _, ace, window));
