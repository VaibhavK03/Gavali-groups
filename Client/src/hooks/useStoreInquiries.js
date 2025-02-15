import { useState, useEffect } from "react";
import axios from "axios";

const useStoreInquiries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const storeInquiries = async (inquiries) => {
    
  };

  return { storeInquiries };
};

export default useStoreInquiries;