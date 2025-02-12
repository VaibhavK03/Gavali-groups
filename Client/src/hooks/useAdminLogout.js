import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAdminLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const logout = async () => {
        setLoading(true);
        setError(null);

        try {
            await axios.post("http://localhost:5000/api/admin/logout", {}, { withCredentials: true });
            navigate("/admin"); // Navigate to login after successful logout
        } catch (err) {
            setError(err.response?.data?.error || "Failed to logout");
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading, error };
};

export default useAdminLogout;
