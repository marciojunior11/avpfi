import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { 
    Dashboard,
    ConsultaClientes, 
    ConsultaPaises,
    ConsultaEstados,
    ConsultaCidades
} from "../pages";
import { ConsultaFornecedores } from "../pages/fornecedores/ConsultaFornecedores";


export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/home',
            },
            {
                label: 'Clientes',
                icon: 'people',
                path: '/clientes',
            },
            {
                label: 'Fornecedores',
                icon: 'people',
                path: '/fornecedores',
            },
            {
                label: 'Paises',
                icon: 'location_city',
                path: '/paises',
            },
            {
                label: 'Estados',
                icon: 'location_city',
                path: '/estados',
            },
            {
                label: 'Cidades',
                icon: 'location_city',
                path: '/cidades',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/home" element={<Dashboard/>}/>
            
            <Route path="/clientes" element={<ConsultaClientes/>}/>
            {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>}/>*/}

            <Route path="/fornecedores" element={<ConsultaFornecedores/>}/>
            {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>}/>*/}

            <Route path="/paises" element={<ConsultaPaises/>}/>
            {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>}/>*/}

            <Route path="/estados" element={<ConsultaEstados/>}/>
            {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>}/>*/}

            <Route path="/cidades" element={<ConsultaCidades/>}/>
            {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>}/>*/}

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}