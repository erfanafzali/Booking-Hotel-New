import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

 

export default function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await axios.get("http://localhost:3000/hotels");
         console.log(data)
      } catch (err) {
        setData([]);
        toast.error(err?.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { isLoading, data };
}
