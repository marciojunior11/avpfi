import { IListaPaises } from './../models/Paises';
import { daoPaises } from "../daos";

const carregarLista = (page = 1, filter = ''): Promise<any | Error> => {

    return daoPaises.carregarLista(page, filter);

};

const buscar = async () => {

};

const salvar = async () => {

};

const deletar = async () => {

};

const alterar = async () => {

};

export const ctrlPaises = {
    carregarLista,
    buscar,
    salvar,
    deletar,
    alterar,
}
