import { ClassePai } from "./ClassePai";
import { Estados } from "./Estados";

export class Cidades extends ClassePai {
    private id: number;
    private cidade: string;
    private estado : Estados;

    public set setId(pId: number) {
        this.id = pId;
    };
    
    public set setCidade(pCidade: string) {
        this.cidade = pCidade;
    }; 

    public set setEstado(pEstado: Estados) {
        this.estado = pEstado;
    }; 

    public get getId() {
        return this.id;
    };

    public get getCidade() {
        return this.cidade;
    };

    public get getEstado() {
        return this.estado;
    };

    public get getClone() {
        var mCidade : Cidades = Object.create(this);
        return mCidade;
    }

    constructor(props?: Omit<Cidades, 'id'>, id?: number) {
        super();
        if (!props) {
            this.id = 0;
            this.cidade = '';
            this.estado = new Estados();
            this.dataCad = new Date();
            this.ultAlt = new Date();
        } else {
            Object.assign(this, props);
            Object.assign(this.id, id);
        };
    }
}