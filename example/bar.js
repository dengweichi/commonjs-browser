define(function (require, exports, module) {
   const { result } = require('./foo');
   console.assert(result === 2);
})
