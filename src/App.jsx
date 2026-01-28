import { BrowserRouter, Routes } from "react-router-dom";
import "./globalStyles.scss";
import Doacao from "./pages/doacao/Doacao";
import EventosEP from "./pages/eventosEP/EventosEP";
import Mentoria from "./pages/mentoria/Mentoria";
import PaginaInicial from "./pages/paginaInicial/PaginaInicial";
import Usuario from "./pages/usuario/Usuario";
import Voluntariado from "./pages/voluntariado/Voluntariado";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/doacao" element={<Doacao/>}/>
          <Route path="/eventosep" element={<EventosEP/>}/>
          <Route path="/mentoria" element={<Mentoria/>}/>
          <Route path="/usuario" element={<Usuario/>}/>
          <Route path="/voluntariado" element={<Voluntariado/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
