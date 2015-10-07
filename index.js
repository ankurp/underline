import _ from 'underscore';

export default _.reduce(Object.keys(_), (h, k) => {
  h[k] = _.wrap(_[k], function(f, ...args) { return f(this, ...args); });
  return h;
}, {});;
