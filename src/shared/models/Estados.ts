import { ClassePai } from "./ClassePai";
import { Paises } from "./Paises";

export class Estados extends ClassePai {
    private id: number;
    private estado: string;
    private uf: string;
    private pais: Paises;

    public set setId(pId: number) {
        this.id = pId;
    };
    
    public set setEstado(pEstado: string) {
        this.estado = pEstado;
    };

    public set setUF(pUF: string) {
        this.uf = pUF;
    };

    public set setPais(pPais: Paises) {
        this.pais = pPais;
    };
    
    public get getId() {
        return this.id;
    }

    public get getEstado() {
        return this.estado;
    }

    public get getUF() {
        return this.uf;
    }

    public get getPais() {
        return this.pais;
    }

    public get getClone() {
        var mEstado : Estados = Object.create(this);
        return mEstado;
    }

    constructor(props?: Omit<Paises, 'id'>, id?: number) {
        super();
        if (!props) {
            this.id = 0;
            this.estado = '';
            this.uf = '';
            this.pais = new Paises();
            this.dataCad = new Date();
            this.ultAlt = new Date();
        } else {
            Object.assign(this, props);
            Object.assign(this.id, id);
        };
    }
}