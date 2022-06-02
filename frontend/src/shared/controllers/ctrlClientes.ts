import { daoClientes } from "../daos";

const carregarLista = async () => {
    try {
        daoClientes.carregarLista();
    } catch (e) {
        console.log(e);
    }
};

const buscar = async () => {

};

const salvar = async () => {

};

const deletar = async () => {

};

const alterar = async () => {

};

export const ctrlClientes = {
    carregarLista,
    buscar,
    salvar,
    deletar,
    alterar,
}
