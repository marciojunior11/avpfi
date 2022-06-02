import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ListTools } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";


export const ConsultaEstados: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';    
    }, [searchParams]);

    useEffect(() => {
        
    }, [])

    return (
        <LayoutBase 
            titulo="Consulta de Estados"
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