import { Link } from "react-router-dom";

function ListOfHotels({ data }) {
  const showData = data.slice(0, 6);

  return (
    <div className="w-full h-[600px] overflow-y-auto">
      {showData.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}?lng=${item.longitude}`}
            className="w-full flex flex-col items-center justify-center py-2 "
          >
            <HotelTab item={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default ListOfHotels;

function HotelTab({ item }) {
  return (
    <div className="w-full px-3 ">
      <div className="w-full  bg-slate-800 rounded-xl overflow-hidden flex justify-start items-center gap-x-2 sm:gap-x-3 lg:gap-x-5">
        <img
          src={item.thumbnail_url}
          alt=""
          className="h-20 sm:h-24 md:h-20 lg:h-28"
        />
        <div className="w-full flex flex-col justify-start items-start">
          <h1 className="text-sm sm:text-base md:text-sm lg:text-lg font-semibold text-slate-100">
            {item.smart_location}
          </h1>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-slate-300 mt-1">
            {item.name}
          </p>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-slate-300 mt-1 ">
            {item.property_type}
          </p>
        </div>
      </div>
    </div>
  );
}
