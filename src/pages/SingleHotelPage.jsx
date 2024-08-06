import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../modules/Loader";

function SingleHotelPage() {
  const { id } = useParams();

  const { data: singlehotel, isLoading } = useFetch(
    `http://localhost:3000/hotels/${id}`
  );

  console.log(singlehotel);

  return (
    <div className="w-full ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full bg-slate-700 rounded-xl lg:h-screen px-6 py-7">
          <h1 className="w-full text-white font-bold text-xl text-center flex flex-col justify-center items-center">
            <span> {singlehotel.name}</span>
            <span className="font-semibold text-slate-300">
              ({singlehotel.host_name})
            </span>
          </h1>
          <img
            src={singlehotel.xl_picture_url}
            alt=""
            className="rounded-xl mt-6"
          />
          <p className="text-slate-200 mt-6 text-justify">
            {singlehotel.summary ? singlehotel.summary : singlehotel.host_about}
          </p>
        </div>
      )}
    </div>
  );
}

export default SingleHotelPage;
