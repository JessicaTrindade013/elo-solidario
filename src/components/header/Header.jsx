import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import S from "./header.module.scss";
import { FaHome, FaBox, FaUser, FaUsers } from "react-icons/fa";


export default function Header() {
  return (
    <header className={S.header}>
      <div className={S.container}>
        
        
        <div className={S.logo}>
          <img
            className={S.imgLogo}
            src={Logo}
            alt="Logo representando apoio e solidariedade"
          />

          <div>
            <h1>Elo Solidário</h1>
            <p>Doações que conectam, solidariedade que transforma</p>
          </div>
        </div>

        
        <nav className={S.nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${S.link} ${S.active}` : S.link}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/doacao" className={({ isActive }) => isActive ? `${S.link} ${S.active}` : S.link}>
            <FaBox /> Doações
          </NavLink>

          <NavLink to="/cadastro" className={({ isActive }) => isActive ? `${S.link} ${S.active}` : S.link}>
            <FaUser /> Cadastro
          </NavLink>

          <NavLink to="/voluntariado" className={({ isActive }) => isActive ? `${S.link} ${S.active}` : S.link}>
            <FaUsers /> Voluntariado
          </NavLink>
        </nav>

      </div>
    </header>
  );
}