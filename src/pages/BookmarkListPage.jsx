import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";
import ReactCountryFlag from "react-country-flag";
import truncateText from "../utils/truncateText";
import Loader from "../modules/Loader";
import { FaTrash } from "react-icons/fa";

function BookmarkListPage() {
  const { isLoading, bookmarks, currBookmark, deleteBookmark } = useBookmarks();

  const handleDeleteBookmark = async (e, id) => {
    e.preventDefault();
    await deleteBookmark(id);
  };

  if (isLoading) return <Loader />;

  if (!bookmarks.length)
    return (
      <div className="w-full bg-slate-700 rounded-xl py-4 text-center font-bold text-white">
        ops!! Please add bookmarks
      </div>
    );

  return (
    <div className="w-full bg-slate-700 h-auto pb-8 rounded-xl px-4">
      <h1 className="w-full text-center font-bold text-xl py-6 text-slate-200">
        Bookmark List
      </h1>
      {bookmarks.map((item) => (
        <Link
          to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          key={item.id}
          className={`w-full flex justify-start items-center  px-4  bg-slate-900 text-slate-100 gap-x-5 font-semibold  mb-4 py-3 rounded-xl ${
            item?.id === currBookmark?.id
              ? "border-slate-200 border-2"
              : "border-2 border-slate-500"
          }`}
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-x-2">
              <ReactCountryFlag svg countryCode={item.countryCode} />
              <div className=" flex justify-center items-center text-sm  lg:text-base">
                <p>{truncateText(item.country, 20)}</p>
                &nbsp; - &nbsp;
                <p>{truncateText(item.cityName, 25)}</p>
              </div>
            </div>
            <button
              className=""
              onClick={(e) => handleDeleteBookmark(e, item.id)}
            >
              <FaTrash className="w-5 h-5 text-red-500 hover:text-red-300" />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BookmarkListPage;
