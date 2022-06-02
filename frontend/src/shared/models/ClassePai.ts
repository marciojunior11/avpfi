export class ClassePai {

    protected dataCad: Date;
    protected ultAlt: Date;

    public set setDataCad(pDataCad: Date) {
        this.dataCad = pDataCad;
    };

    public set setUltAlt(pUltAlt: Date) {
        this.ultAlt = pUltAlt;
    };

    public get getDataCad() {
        return this.dataCad
    };

    public get getUltAlt() {
        return this.ultAlt
    };

    constructor(props?: ClassePai) {

        if (!props) {
            this.dataCad = new Date();
            this.ultAlt = new Date();
        } else {
            Object.assign(this, props);
        }
    };

}