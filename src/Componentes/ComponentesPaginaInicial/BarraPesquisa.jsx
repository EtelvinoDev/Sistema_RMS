
import { Search } from "lucide-react";
import { useState } from "react";
import "./BarraPesquisa.css";

function BarraPesquisa() {
    const [pesquisa, setPesquisa] = useState("");

    return (
        <div className="barra-pesquisa">
            <Search size={20} className="icone-pesquisa" />

            <input
                type="text"
                placeholder="Pesquisar..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
            />
        </div>
    );
}

export default BarraPesquisa;
