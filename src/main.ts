import { defineFun,defineValue, use } from "./define";

const define = function (module:any) {
    if (!module && module !== 0) {
        throw new Error('需要一个参数');
    }
    if (typeof module === 'function') {
        defineFun(module as Function);
    } else {
        defineValue(module);
    }
}

define.use = use;

export default define;