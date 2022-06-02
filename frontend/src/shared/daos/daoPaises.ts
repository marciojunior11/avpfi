import { PaisesService } from './../services/api/paises/PaisesService';


const carregarLista = async (page = 1, filter = ''): Promise<any | Error> => {
    return new Promise( async (resolve, reject) => {
        await PaisesService.getAll(page, filter)
            .then( response => {
                if ( response instanceof Error ) {
                    reject("Erro")
                }
                resolve(response.data);
            } )
    })    
};

const buscar = async () => {

};

const salvar = async () => {

};

const deletar = async () => {

};

const alterar = async () => {

};

export const daoPaises = {
    carregarLista,
    buscar,
    salvar,
    deletar,
    alterar,
}