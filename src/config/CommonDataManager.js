export default class CommonDataManager {

    static myInstance = null;

    _data = "";

    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (this.myInstance === null) {
            this.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getData() {

        //if data is not set yet load default tehran
        if (this._data == ""){
            return {
                type : 'city' ,
                id : 342
            }
        }

        return this._data;

    }

    setData(data) {
        this._data = data;
    }
}
