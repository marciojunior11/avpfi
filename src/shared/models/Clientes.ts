import { Cidades } from "./Cidades";
import { Pessoas } from "./Pessoas";

export class Clientes extends Pessoas {
    private nome: string;
    private cpf: string;
    private rg: string;
    private associado: boolean;

    public set setNome(pNome: string) {
        this.nome = pNome;
    };

    public set setCpf(pCpf: string) {
        this.cpf = pCpf;
    };

    public set setRg(pRg: string) {
        this.rg = pRg;
    };

    public set setAssociado(pAssociado: boolean) {
        this.associado = pAssociado;
    };

    public get getNome() {
        return this.nome; 
    };

    public get getCpf() {
        return this.cpf; 
    };

    public get getRg() {
        return this.rg;
    };

    public get getAssociado() {
        return this.associado;
    };

    public get getClone() {
        var mCliente : Clientes = Object.create(this);
        return mCliente;
    }

    constructor(props?: Omit<Clientes, 'id'>, id?: number) {
        super();
        if (!props) {
            this.id = 0;
            this.nome = '';
            this.cpf = '';
            this.rg = '';
            this.telefone = '';
            this.endereco = '';
            this.numEnd = '';
            this.bairro = '';
            this.cidade = new Cidades();
            this.associado = false;
            this.dataCad = new Date();
            this.ultAlt = new Date();
        } else {
            Object.assign(this, props);
            Object.assign(this.id, id);
        };
    };
}