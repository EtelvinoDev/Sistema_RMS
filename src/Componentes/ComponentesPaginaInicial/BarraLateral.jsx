
import logo from "../../assets/Emblema dourado RMS em azul-marinho.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { House, Folder, FilePlus, Info } from "lucide-react";
import BarraPesquisa from "./BarraPesquisa.jsx";
import "./BarraLateral.css";

function BarraLateral() {
    const [aberto, setAberto] = useState(false);

    const dataAtual = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    
return (
    <aside className={`barra-lateral ${aberto ? "aberto" : ""}`}>

        <div className="topo-barra">
            <img src={logo} alt="Logo RMS" className="barra-logo" />

            <button
                className="botao-menu"
                onClick={() => setAberto(!aberto)}
            >
                {aberto ? "<" : ">"}
            </button>
        </div>

        {aberto && (
            <>
                <h2 className="Titulo-Lateral">
                    Painel de processos
                </h2>

                <p className="data-atual">{dataAtual}</p>

                <div className="barraPesquisa-Lateral">
                    <BarraPesquisa />
                </div>
            </>
        )}
            <hr className="linha-separadora" />
            
        <nav className="barra-navegacao">
            <ul>
                <li>
                    <NavLink to="/pagina-inicial"
                        className={({ isActive }) => isActive ? "ativo" : ""}>
                        <House size={18} />
                        <span>Página Inicial</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="#">
                        <Folder size={18} />
                        <span>Processos</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="#">
                        <FilePlus size={18} />
                        <span>Novo Processo</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="#">
                        <Info size={18} />
                        <span>Sobre Nós</span>
                    </NavLink>
                </li>
            </ul>
        </nav>

        {aberto && (
            <footer className="footer">
                © 2026 RMS. Todos os direitos reservados.
            </footer>
        )}

    </aside>
);

}

export default BarraLateral;
