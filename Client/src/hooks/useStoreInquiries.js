import { useState } from "react";
import axios from "axios";

const useStoreInquiries = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const storeInquiries = async (name, email, phone, subject, message) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.post(
        "http://localhost:5000/api/client/inquiries",
        { name, email, phone, subject, message },
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (err) {
      console.error("Error storing inquiries:", err);
      setError(err.response?.data?.error || "Failed to store inquiries");
    } finally {
      setLoading(false);
    }
  };

  return { storeInquiries, loading };
};

export default useStoreInquiries;
