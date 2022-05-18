import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts";
import { 
    Dashboard,
    ListagemDeCidades 
} from "../pages";


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
                label: 'Cidades',
                icon: 'location_city',
                path: '/cidades',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/home" element={<Dashboard/>}/>
            
            <Route path="/cidades" element={<ListagemDeCidades/>}/>
            {/*<Route path="/cidades/detalhe/:id" element={<Dashboard/>}/>*/}

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}