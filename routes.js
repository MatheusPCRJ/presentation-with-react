import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Rodape from "Componentes/Rodape/Index";
import PaginaPadrao from "Componentes/PaginaPadrao/Index";
import Post from "Paginas/Post/Index";
import NaoEncontrada from "Paginas/NaoEncontrada/Index";
import ScrollToTop from "Componentes/ScrollToTop/Index";

function AppRoutes() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
