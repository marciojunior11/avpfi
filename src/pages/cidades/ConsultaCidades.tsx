import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";


export const ConsultaCidades: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';    
    }, [searchParams]);

    useEffect(() => {

    }, [])

    return (
        <LayoutBase 
            titulo="Consulta de Cidades"
            barraDeFerramentas={
                <ListTools
                    textoBotaoNovo="Nova"
                    mostrarInputBusca
                    textoDaBusca={busca}
                    handleSeachTextChange={texto => setSearchParams({ busca : texto }, { replace : true })}
                />
            }
        >
        </LayoutBase>
    );
};