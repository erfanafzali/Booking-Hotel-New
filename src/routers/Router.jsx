import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleHotelPage from "../pages/SingleHotelPage";
import HotelPage from "../pages/HotelPage";
import HotelLayout from "../layouts/HotelLayout";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelLayout />}>
          <Route index element={<HotelPage />} />
          <Route path=":id" element={<SingleHotelPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
