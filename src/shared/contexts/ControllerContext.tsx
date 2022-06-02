import { createContext, useState } from "react";
import { ctrlPaises as controllerPaises } from "../controllers/ctrlPaises";

interface IControllerContextData {
    ctrlPaises,
}

const controllers = {
    ctrlPaises: controllerPaises
}

export const ControllerContext = createContext(controllers);

export const ControllerProvider: React.FC<any> = ({children}) => {

    return (

        <ControllerContext.Provider value={controllers}>
            {children}
        </ControllerContext.Provider>

    )

}