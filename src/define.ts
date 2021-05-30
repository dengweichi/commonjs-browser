import { getAbsoluteURL,loadScript } from "./utils";

export const cache = {};

let currentModuleId: string = '';
/**
 * @description 定义模块
 * @param module{Function}
 */
export const defineFun = function (module: Function) {
    
}

/**
 * @description 定义数据
 * @param module
 */
export const defineValue = function (module: any) {
    
}

/**
 * @description 使用主模块
 * @param moduleIdentify{string}
 */
export const use = function (moduleIdentify:string) {
    if (!moduleIdentify.endsWith('.js')) {
        moduleIdentify+= '.js';
    }
    const absoluteURL = getAbsoluteURL(moduleIdentify);
    currentModuleId = absoluteURL;
    loadScript(absoluteURL);
}