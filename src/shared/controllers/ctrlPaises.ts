import { daoPaises } from "../daos";

const getPaises = async () => {
    try {
        daoPaises.getPaises();
    } catch (e) {
        console.log(e);
    }
};

const getUmPais = async () => {

};

const salvarPais = async () => {

};

const deletarPais = async () => {

};

const alterarPais = async () => {

};

export const ctrlPaises = {
    getPaises,
    getUmPais,
    salvarPais,
    deletarPais,
    alterarPais
}
