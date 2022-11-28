import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Rodape from "Componentes/Rodape/Index";
import PaginaPadrao from "Componentes/PaginaPadrao/Index";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="*" element={<div>Erro 404!</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
