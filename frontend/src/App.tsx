import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Sidemenu } from "./shared/components";
import { AppThemeProvider, DrawerProvider } from "./shared/contexts";
import { ControllerProvider } from "./shared/contexts/ControllerContext";

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <ControllerProvider>
          <BrowserRouter>
            <Sidemenu>
              <AppRoutes/>
            </Sidemenu>
          </BrowserRouter>
        </ControllerProvider>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
