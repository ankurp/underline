import _, { reduce, wrap } from 'underscore';

export default reduce(Object.keys(_), (h, k) => ({
  ...h,
  [k]: wrap(_[k], function(f, ...args) {
    return f(this, ...args);
  })
}), {});
