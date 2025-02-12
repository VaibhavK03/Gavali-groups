import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("http://localhost:5000/protected", {
                    withCredentials: true,
                });
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) return <p>Loading...</p>;

    return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default PrivateRoute;
