import { Link } from "react-router-dom"
import "./header.module.scss"

const Header = () => {
  return(
    <header>


      <nav>
        <Link to={"/doacao"}>Doacao</Link>
        <Link to={"/voluntariado"}>Voluntariado</Link>
        <Link to={"/mentoria"}>Mentoria</Link>
        <Link to={"/eventosep"}>Eventos & Palestras</Link>
      </nav>


    </header>

  )
}

export default Header
