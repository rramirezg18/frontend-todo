import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
    const { role, logout } = useAuth();

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <aside style={{ width: "200px", background: "#1e293b", color: "white", padding: "1rem" }}>
                <h2>Panel</h2>
                <p>Rol: {role}</p>
                <button onClick={logout}>Cerrar sesión</button>
            </aside>

            <div>
                Esto es el layout
            </div>

            {/* Contenido */}
            <main style={{ flex: 1, padding: "2rem" }}>
                <Outlet />
            </main>


        </div>
    );
};

export default DashboardLayout;