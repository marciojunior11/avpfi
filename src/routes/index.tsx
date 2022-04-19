import { Button } from "@mui/material";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/home',
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Drawer</Button>}/>

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}