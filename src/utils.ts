
const baseURL = new URL(location.origin);
export const getAbsoluteURL = function (moduleIdentify:string) {
    return new URL(moduleIdentify, baseURL).href;
}

export const loadScript = function (url:string, async:boolean = false) {
    const script = document.createElement('script');
    script.src = url;
    script.async = false;
    document.querySelector('head').appendChild(script);
}