
export default class Module{
    private _id: string;
    private _exports: object = {};
    private _uri: string;
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
}
