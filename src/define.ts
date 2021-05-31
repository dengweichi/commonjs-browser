
import requireModule  from "./require";
import Module from './module'

/**
 * @description 定义模块
 * @param moduleCallBack{Function}
 */
export const defineFun = function (moduleCallBack: Function) {
    const module = new Module(requireModule.currentModuleId);
    const exports = module.exports;
    requireModule.cache[requireModule.currentModuleId] = module.exports;
    moduleCallBack(requireModule, exports, module);
}

/**
 * @description 定义数据
 * @param moduleValue
 */
export const defineValue = function (moduleValue: any) {
    const module = new Module(requireModule.currentModuleId);
    module.exports = moduleValue;
    requireModule.cache[requireModule.currentModuleId] = module.exports;
}

/**
 * @description 使用主模块
 * @param moduleIdentify{string}
 */
export const use = function (moduleIdentify:string) {
    requireModule.currentModuleId = location.origin;
    requireModule(moduleIdentify);
}
