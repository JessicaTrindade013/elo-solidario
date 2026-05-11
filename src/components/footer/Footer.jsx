import S from "./footer.module.scss";
import Logo from "../../assets/img/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.container}>
        <div className={S.content}>
          
          <div className={S.logo}>
            <div className={S.logoArea}>
              <img src={Logo} alt="Logo Elo Solidário" />
              <h2>Elo Solidário</h2>
            </div>
            <p>Doações que conectam, solidariedade que transforma.</p>
          </div>

          <nav className={S.section}>
            <h3>Navegação</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/doacao">Doações</a></li>
              <li><a href="/cadastro">Cadastro</a></li>
              <li><a href="/voluntariado">Voluntariado</a></li>
            </ul>
          </nav>

          <nav className={S.section}>
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Como Funciona</a></li>
              <li><a href="#">Transparência</a></li>
              <li><a href="#">Fale Conosco</a></li>
            </ul>
          </nav>

          <div className={S.section}>
            <h3>Contato</h3>
            <ul>
              <li><FaPhone /> (00) 00000-0000</li>
              <li><FaEnvelope /> contato@elosolidario.com</li>
              <li><FaMapMarkerAlt /> Rua Exemplo, 123 - Centro</li>
            </ul>
          </div>

          <div className={S.section}>
            <h3>Redes Sociais</h3>
            <div className={S.socials}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <div className={S.copyright}>
          <p>© 2026 Elo Solidário. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}