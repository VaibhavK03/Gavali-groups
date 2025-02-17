import { useState, useEffect } from "react";
import axios from "axios";

const useFetchInquiries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("http://localhost:5000/api/client/get-inquiries", {
        withCredentials: true,
      });
      setData(res.data || []);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
      setError(err.response?.data?.error || "Failed to fetch inquiries");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return { data, loading, error, refetch: fetchInquiries };
};

export default useFetchInquiries;
