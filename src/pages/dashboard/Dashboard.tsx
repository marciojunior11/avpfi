import { Toolbar } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";


export const Dashboard = () => {
    return (
        <LayoutBase
            titulo='Página inicial'
            barraDeFerramentas={(
                <Toolbar
                    mostrarInputBusca
                />
            )}
        >
            Testando
        </LayoutBase>
    );
};