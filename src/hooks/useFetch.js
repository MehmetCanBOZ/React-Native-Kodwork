import axios from "axios";
import { useEffect,useState } from "react";

const useFetch = (url) => {
  const [data,setData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {data} = await axios.get(url)
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url])

  return {
    data,error,loading
  }
}

export default useFetch