import { Link } from "react-router-dom";
import Loader from "../../modules/Loader";

function ListOfHotels({ isLoading, data }) {
  if (isLoading) return <Loader />;

  return (
    <div className="w-full">
      {data.map((item) => (
        <Link
          key={item.id}
          to={`/hotels/${item.id}?lat=${item.latitude}?lng=${item.longitude}`}
          className="w-full flex flex-col items-center justify-center py-2 "
        >
          <HotelTab item={item} />
        </Link>
      ))}
    </div>
  );
}

export default ListOfHotels;

function HotelTab({ item }) {
  return <div className="w-full bg-slate-800">ss</div>;
}
