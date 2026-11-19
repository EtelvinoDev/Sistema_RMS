import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import PaginaInicial from "../pages/PaginaInicial";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/pagina-inicial" element={<PaginaInicial />} />
        </Routes>
    );
}

export default AppRoutes;