/**
 * @description commonjs 模块
 */
export default class Module{
    private _id: string;
    private _exports: object = {};
    private _uri: string;
    private _dependencies:string[] = [];

    constructor(id) {
        this._id = id;
        this._uri = id;
    }
    get exports () {
        return this._exports;
    }
    set exports (value: object) {
        this._exports = value;
    }
    get dependencies () {
        return this._dependencies;
    }

    /**
     * @description 添加依赖
     * @param depend
     */
    addDepend(depend:string) {
        // 防止重复添加
       if (!this._dependencies.includes(depend)) {
           this._dependencies.push(depend);
       }
    }

    /**
     * @description 移除依赖。
     * @param depend
     */
    removeDepend (depend:string) {
        const index = this._dependencies.findIndex((dependItem:string) => {
            return dependItem === depend;
        });
        if (index !== -1) {
            this._dependencies.splice(index, 1);
        }
    }
}
