import axios, { AxiosStatic } from "axios";
import { useState, useEffect } from 'react';
import baseUrl from "../constants/baseUrl";

const useAxios = ( 
  {url, method="get", body = null, headers = null }
  ) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError({})
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          method: method,
          data: body,
          headers:headers
        });
        const data = response?.data;
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then((r) => r);
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
