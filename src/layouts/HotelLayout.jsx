import { Outlet } from "react-router-dom";
import MapPage from "../pages/MapPage";

function HotelLayout() {
  return (
    <div className="w-full md:flex-row flex-col flex justify-center items-center gap-y-7 md:gap-y-0 md:gap-x-7">
      <Outlet />
      <MapPage />
    </div>
  );
}

export default HotelLayout;
