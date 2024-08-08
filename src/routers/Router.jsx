import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleHotelPage from "../pages/SingleHotelPage";
import HotelPage from "../pages/HotelPage";
import HotelLayout from "../layouts/HotelLayout";
import BookmarkLayout from "../layouts/BookmarkLayout";
import BookmarkListPage from "../pages/BookmarkListPage";
import AddBookmark from "../components/templates/AddBookmark";
import SingleBookmarkPage from "../pages/SingleBookmarkPage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelLayout />}>
          <Route index element={<HotelPage />} />
          <Route path=":id" element={<SingleHotelPage />} />
        </Route>

        <Route path="/bookmarks" element={<BookmarkLayout />}>
          <Route index element={<BookmarkListPage />} />
          <Route path=":id" element={<SingleBookmarkPage />} />
          <Route path="add" element={<AddBookmark />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
