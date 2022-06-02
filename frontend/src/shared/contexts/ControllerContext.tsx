import { createContext, useState } from "react";
import { ctrlPaises as controllerPaises } from "../controllers/ctrlPaises";
import { ctrlClientes as controllerClientes } from "../controllers/ctrlClientes";

interface IControllerContextData {
    ctrlPaises,
    ctrlClientes
}

const controllers = {
    ctrlPaises: controllerPaises,
    ctrlClientes: controllerClientes
}



export const ControllerContext = createContext(controllers);

export const ControllerProvider: React.FC<any> = ({children}) => {

    return (

        <ControllerContext.Provider value={controllers}>
            {children}
        </ControllerContext.Provider>

    )

}