import { Cidades } from "./Cidades";
import { ClassePai } from "./ClassePai";

export class Pessoas extends ClassePai {
    protected id: number;
    protected telefone: string;
    protected endereco: string;
    protected numEnd: string;
    protected bairro: string;
    protected cidade: Cidades;

    public set setId(pId: number) {
        this.id = pId;
    };

    public set setTelefone(pTelefone: string) {
        this.telefone = pTelefone;
    };

    public set setEndereco(pEndereco: string) {
        this.endereco = pEndereco;
    };

    public set setNumEnd(pNumEnd: string) {
        this.numEnd = pNumEnd;
    };

    public set setBairro(pBairro: string) {
        this.bairro = pBairro;
    };

    public set setCidade(pCidade: Cidades) {
        this.cidade = pCidade;
    };

    public get getId() {
        return this.id;
    };

    public get getTelefone() {
        return this.telefone;
    };
    
    public get getEndereco() {
        return this.endereco;
    };

    public get getNumend() {
        return this.numEnd;
    };

    public get getBairro() {
        return this.bairro;
    };

    public get getCidade() {
        return this.cidade;
    };

    public get getClone() {
        var mPessoa : Pessoas = Object.create(this);
        return mPessoa;
    }

    constructor(props?: Omit<Pessoas, 'id'>, id?: number) {
        super();
        if (!props) {
            this.id = 0;
            this.telefone = '';
            this.endereco = '';
            this.numEnd = '';
            this.bairro = '';
            this.cidade = new Cidades();
            this.dataCad = new Date();
            this.ultAlt = new Date();
        } else {
            Object.assign(this, props);
            Object.assign(this.id, id);
        };
    };
}