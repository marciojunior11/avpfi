import { Cidades } from "./Cidades";
import { Pessoas } from "./Pessoas"

export class Fornecedores extends Pessoas {
    private razSocial: string;
    private nomeFantasia: string;
    private cnpj: string;

    public set setRazSocial(pRazSocial: string) {
        this.razSocial = pRazSocial;
    };

    public set setNomeFantasia(pNomeFantasia: string) {
        this.nomeFantasia = pNomeFantasia;
    };

    public set setCnpj(pCnpj: string) {
        this.cnpj = pCnpj;
    };

    public get getRazSocial() {
        return this.razSocial;
    };

    public get getNomeFantasia() {
        return this.nomeFantasia;
    };

    public get getCnpj() {
        return this.cnpj;
    };

    public get getClone() {
        var mFornecedor : Fornecedores = Object.create(this);
        return mFornecedor;
    }

    constructor(props?: Omit<Fornecedores, 'id'>, id?: number) {
        super();
        if (!props) {
            this.id = 0;
            this.razSocial = '';
            this.nomeFantasia = '';
            this.cnpj = '';
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