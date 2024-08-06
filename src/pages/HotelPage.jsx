import ListOfHotels from "../components/templates/ListOfHotels";
import { useHotels } from "../context/HotelsContext";
import Loader from "../modules/Loader";

function HotelPage() {
  const { isLoading, hotels ,currentHotel } = useHotels();

  if (isLoading) return <Loader />;

  return (
    <div className="text-white w-full bg-slate-700 order-1 md:order-none rounded-xl sticky top-0">
      <div className="w-full flex flex-col items-center justify-start ">
        <SearchResults data={hotels.length} />
        <ListOfHotels data={hotels} isLoading={isLoading} currentHotel={currentHotel}/>
      </div>
    </div>
  );
}

export default HotelPage;

function SearchResults({ data }) {
  return (
    <div className="w-full flex text-xl font-bold text-slate-300 justify-center items-center py-5">
      <p>Search results :</p>
      <span>({data})</span>
    </div>
  );
}
