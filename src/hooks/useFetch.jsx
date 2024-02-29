import { useState, useEffect } from "react";
import axiosInstance from "../api/AxiosInstance";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const count=0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(url);
        console.log("haridk", response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

      // Check if the page is being refreshed
      const isPageRefreshed = performance.navigation.type === 1;

      if (isPageRefreshed) {
        // Redirect to the home page
        window.location.href = "/";
      } else {
        // Fetch data if not refreshed
        fetchData();
      }

    // Cleanup function to cancel any pending requests if component unmounts
    return () => {
      // Your cleanup logic here, if needed
    };
  }, [url,count]); // Dependency array to re-run effect when url changes

  return { data, loading, error };
};

export default useFetch;
