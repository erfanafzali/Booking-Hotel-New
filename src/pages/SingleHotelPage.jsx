import { useParams } from "react-router-dom";
import Loader from "../modules/Loader";
import { useHotels } from "../context/HotelsContext";
import { useEffect } from "react";

function SingleHotelPage() {
  const { id } = useParams();
  const { isLoadingCurr, getHotel , currentHotel} = useHotels();

  useEffect(() => {
    getHotel(id);
  }, [id]);

  return (
    <div className="w-full ">
      {isLoadingCurr ? (
        <Loader />
      ) : (
        <div className="w-full bg-slate-700 rounded-xl lg:h-screen px-6 py-7">
          <h1 className="w-full text-white font-bold text-xl text-center flex flex-col justify-center items-center">
            <span> {currentHotel.name}</span>
            <span className="font-semibold text-slate-300">
              ({currentHotel.host_name})
            </span>
          </h1>
          <img
            src={currentHotel.xl_picture_url}
            alt=""
            className="rounded-xl mt-6"
          />
          <p className="text-slate-200 mt-6 text-justify">
            {currentHotel.summary ? currentHotel.summary : currentHotel.host_about}
          </p>
        </div>
      )}
    </div>
  );
}

export default SingleHotelPage;
