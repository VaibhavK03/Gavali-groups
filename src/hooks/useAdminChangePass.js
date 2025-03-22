import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAdminChangePass = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changePass = async (oldPassword, newPassword, confirmNewPassword) => {
        setLoading(true);

        try {
            const res = await axios.put(
                "/api/admin/change-password",
                { oldPassword, newPassword, confirmNewPassword },
                { withCredentials: true } 
            );
            navigate("/admin");
            return res.data;
        } catch (err) {
            const errorMessage = err.response?.data?.error;
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { changePass, loading };
};

export default useAdminChangePass;