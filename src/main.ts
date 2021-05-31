import { defineFun,defineValue, use } from "./define";

/**
 * @description 全局导出函数，参数可以为任何的有效值
 * @param module
 */
const define = function (module:any) {
    if (!module && module !== 0) {
        throw new Error('需要一个参数');
    }
    // 只需要做函数和其他类型的区别。
    // 函数会作为模块去执行
    // 其他有效值默认只会导出处理
    if (typeof module === 'function') {
        defineFun(module as Function);
    } else {
        defineValue(module);
    }
}

// 把主模块加载函数use挂载到define函数上
define.use = use;

export default define;
