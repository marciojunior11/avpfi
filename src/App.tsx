import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { SideMenu } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <SideMenu>
          <AppRoutes/>
        </SideMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
