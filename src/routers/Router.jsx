import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleHotelPage from "../pages/SingleHotelPage";
import HotelPage from "../pages/HotelPage";
import HotelLayout from "../layouts/HotelLayout";
import BookmarkLayout from "../layouts/BookmarkLayout";
import BookmarkListPage from "../pages/BookmarkListPage";
import AddBookmark from "../components/templates/AddBookmark";
import SingleBookmarkPage from "../pages/SingleBookmarkPage";
import NotFound from "../modules/NotFound";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/hotels"
          element={
            <ProtectedRoute>
              <HotelLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HotelPage />} />
          <Route path=":id" element={<SingleHotelPage />} />
        </Route>

        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <BookmarkLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<BookmarkListPage />} />
          <Route path=":id" element={<SingleBookmarkPage />} />
          <Route path="add" element={<AddBookmark />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Router;
