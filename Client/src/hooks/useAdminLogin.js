import { useState } from "react";
import axios from "axios";

const useAdminLogin = () => {
    const [loading, setLoading] = useState(false);

    const login = async (username, password) => {
        setLoading(true);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/admin/login",
                { username, password },
                { withCredentials: true }
            );
            return res.data;
        } catch (err) {
            const errorMessage = err.response?.data?.error;   
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading };
};

export default useAdminLogin;


