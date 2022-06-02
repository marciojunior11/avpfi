import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
import { ClientesServices } from "../../shared/services/api/clientes/ClientesServices";


export const ConsultaFornecedores: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';    
    }, [searchParams]);

    useEffect(() => {
        ClientesServices.getAll(1, busca)
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    console.log(result);
                }
            });
    }, [busca]);

    return (
        <LayoutBase 
            titulo="Consulta de Fornecedores"
            barraDeFerramentas={
                <ListTools
                    mostrarInputBusca
                    textoDaBusca={busca}
                    handleSeachTextChange={texto => setSearchParams({ busca : texto }, { replace : true })}
                />
            }
        >
        </LayoutBase>
    );
};