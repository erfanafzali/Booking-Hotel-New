import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";
const BookmarkContext = createContext();

export default function BookmarkProvider({ children }) {
  const [currBookmark, setCurrBookmark] = useState({});
  const [isLoadingBookmark, setIsLoadingBookmark] = useState(false);
   
  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookmark(id) {
    try {
      setIsLoadingBookmark(true);
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrBookmark(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookmark,
        currBookmark,
        isLoadingBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  return useContext(BookmarkContext);
}
