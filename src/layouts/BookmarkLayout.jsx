import { Outlet } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import MapPage from "../pages/MapPage";
import useMoveBack from "../hooks/useMoveBack";
import { useBookmarks } from "../context/BookmarkContext";

function BookmarkLayout() {
  const moveBack = useMoveBack();

  const { bookmarks } = useBookmarks();

  return (
    <>
      <button
        onClick={moveBack}
        className="text-white flex justify-center items-center gap-x-2 mb-4 text-lg font-bold animate-pulse"
      >
        <span>
          <IoMdArrowRoundBack className="w-8 h-8 text-white" />
        </span>
        <span>previous page</span>
      </button>
      <div className="w-full md:flex-row flex-col flex justify-center items-start gap-y-7 md:gap-y-0 md:gap-x-7 mb-20">
        <Outlet />
        <MapPage markerLocation={bookmarks} />
      </div>
    </>
  );
}

export default BookmarkLayout;
