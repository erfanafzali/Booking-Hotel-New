import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";

const BASE_URL = "http://localhost:3000/hotels";
const HotelsContext = createContext();

export const HotelsProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [isLoadingCurr, setIsLoadingCurr] = useState(false);
  const [currentHotel, setCurrentHotel] = useState({});
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("option"))?.room;
  const { isLoading, data: hotels } = useFetch(
    BASE_URL,

    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getHotel(id) {
    try {
      setIsLoadingCurr(true);
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotel(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurr(false);
    }
  }

  return (
    <HotelsContext.Provider
      value={{ isLoading, hotels, getHotel, isLoadingCurr, currentHotel }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export function useHotels() {
  return useContext(HotelsContext);
}
