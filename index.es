import _ from 'underscore';

let funcs = {};
for (let key in _) {
  funcs[key] = _.wrap(_[key], function(f, ...args) { return f(this, ...args); });
}

export default funcs;