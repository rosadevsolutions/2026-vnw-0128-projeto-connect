import { Link } from "react-router-dom"
import logo from "../../assets/icons/logo-connect.svg"
import "./header.module.scss"

const Header = () => {
  return(
    <header>
      <Link to={"/"}>
        <img src={logo} alt="logo do projeto" />
      </Link>

      <nav>
        <Link to={"/doacao"}>Doacao</Link>
        <Link to={"/voluntariado"}>Voluntariado</Link>
        <Link to={"/mentoria"}>Mentoria</Link>
        <Link to={"/eventosep"}>Eventos & Palestras</Link>
      </nav>

      <img src="https://avatars.githubusercontent.com/u/215933639?v=4" alt="Romulo Rosa" />


    </header>

  )
}

export default Header
