import { BrowserRouter, Routes } from "react-router-dom";
import "./globalStyles.scss";

const App = () => {
  return (
    <main>
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
    </main>
  )
}

export default App;
