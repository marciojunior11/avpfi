import { ClassePai } from "./ClassePai";

export interface IListaPaises {
    paises: Paises[];
    qtd: number;
}

export interface IPaises {
    id: number;
    pais: string;
    sigla: string;
}

export class Paises extends ClassePai {
    private id: number;
    private pais: string;
    private sigla: string;

    public set setId(pId : number) {
        this.id = pId;
    };

    public set setPais(pPais : string) {
        this.pais = pPais;
    };

    public set setSigla(pSigla : string) {
        this.sigla = pSigla;
    };

    public get getId() {
        return this.id;
    };

    public get getPais() {
        return this.pais;
    };

    public get getSigla() {
        return this.sigla;
    };

    public get getClone() {
        var mPais : Paises = Object.create(this);
        return mPais;
    };

    constructor(props?: Omit<Paises, 'id'>, id?: number) {
        super();

        if (!props) {
            this.id = 0;
            this.pais = '';
            this.sigla = '';
            this.dataCad = new Date();
            this.ultAlt = new Date();
        } else {
            Object.assign(this, props);
            Object.assign(this.id, id);
        };
    };
}