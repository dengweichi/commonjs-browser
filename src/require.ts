/**
 * @description 根据标识符获取绝对路径
 * @param moduleIdentify
 */
const getAbsoluteURL = function (moduleIdentify:string):string {
    if (!moduleIdentify.endsWith('.js')) {
        moduleIdentify+= '.js';
    }
    let baseURL = new URL(requireModule.currentModuleId);
    if (baseURL.pathname.includes('.')) {
        const index = baseURL.pathname.lastIndexOf('/');
        const pathname =baseURL.pathname.slice(index);
        baseURL = new URL(pathname, location.origin);
    }
    return new URL(moduleIdentify, baseURL).href;
}

const requireModule = function (moduleIdentify:string):object {
   const absoluteURL = getAbsoluteURL(moduleIdentify);
   // 如果模块已经加载，直接从缓存中获取。
   if (requireModule.cache[absoluteURL]) {
       return requireModule.cache[absoluteURL];
   }
    requireModule.currentModuleId= absoluteURL;
    // 因为require 需要同步获取模块。在次使用了ajax的同步请求资源
    // 然后再使用 script标签去执行javaScipt代码
    const http = new XMLHttpRequest();
    http.open("GET", absoluteURL, false);
    http.send();
    const response = http.response;
    const script = document.createElement('script');
    script.textContent = response;
    document.querySelector('head').appendChild(script);
    return requireModule.cache[absoluteURL] || null;
}


const async = function (moduleIdentify:string, callback: Function) {
    const absoluteURL = getAbsoluteURL(moduleIdentify);
    if (requireModule.cache[absoluteURL]) {
        callback(callback(requireModule.cache[absoluteURL]));
        return;
    }
    requireModule.currentModuleId= absoluteURL;
    const script = document.createElement('script');
    script.src = absoluteURL;
    script.async = true;
    const loadSuccess = () => {
        callback(requireModule.cache[absoluteURL] || null)
        clear();
    }
    const loadError = () => {
        callback(null);
        clear();
        document.removeChild(script);
        requireModule.cache[absoluteURL] = undefined;
    }
    const clear = () => {
        script.removeEventListener('load', loadSuccess);
        script.removeEventListener('error', loadError);
    }
    script.addEventListener('load', loadSuccess);
    script.addEventListener('error', loadError);
}

requireModule.async = async;
requireModule.cache = {};
requireModule.currentModuleId = '';

export default requireModule;
