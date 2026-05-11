import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Doacao from "./pages/doacao/Doacao";
import Cadastro from "./pages/cadastro/Cadastro";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import "./globalStyles.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/voluntariado" element={<Voluntariado />} />         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}