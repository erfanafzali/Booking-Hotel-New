import { useParams } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";
import { useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Loader from "../modules/Loader";
import gif from "/country-gif.gif";

function SingleBookmarkPage() {
  const { id } = useParams();
  const { getBookmark, currBookmark, isLoadingBookmark } = useBookmarks();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoadingBookmark || !currBookmark) return <Loader />;

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="w-full font-bold text-xl py-6 px-3 text-slate-100">{currBookmark.host_location}</h1>
      <div className="w-full flex justify-start items-center  px-4 border-2 bg-slate-900 text-slate-100 gap-x-5 font-semibold border-slate-400 mb-4 py-3 rounded-xl">
        <ReactCountryFlag svg countryCode={currBookmark.countryCode} />
        <div className=" flex justify-center items-center text-sm  lg:text-base">
          <p>{currBookmark.country}</p>
          &nbsp; - &nbsp;
          <p> {currBookmark.cityName}</p>
        </div>
      </div>
      <img src={gif} alt=""  className="mt-16"/>
    </div>
  );
}

export default SingleBookmarkPage;
