import { useParams } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";
import { useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Loader from "../modules/Loader";
import gif from "/country-gif.gif";

function SingleBookmarkPage() {
  const { id } = useParams();
  const { getBookmark, currBookmark, isLoading } = useBookmarks();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoading || !currBookmark) return <Loader />;

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="w-full font-bold text-xl py-6 px-3 text-slate-100 text-center">
        {currBookmark.host_location}
      </h1>
      <div className="w-full flex flex-col justify-start items-start gap-y-4  px-4 border-2 bg-slate-900 text-slate-100 gap-x-5 font-semibold border-slate-400 mb-4 py-3 rounded-xl">
        <ReactCountryFlag svg countryCode={currBookmark.countryCode} />
        <div className=" flex justify-center items-start text-sm  lg:text-base flex-col">
          <p className="w-full flex justify-start items-center gap-x-2">
            <span>Country:</span>
            <span className="text-slate-300">{currBookmark.country}</span>
          </p>
          <p className="w-full flex justify-start items-center gap-x-2">
            <span>CityName: </span>
            <span className="text-slate-300">{currBookmark.cityName}</span>
          </p>
        </div>
      </div>
      <img src={gif} alt="" className="mt-16" />
    </div>
  );
}

export default SingleBookmarkPage;
