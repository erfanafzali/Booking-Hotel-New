import ListOfHotels from "../components/templates/ListOfHotels";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../modules/Loader";

function HotelPage() {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("option"))?.room;

  const { data, isLoading } = useFetch(
    "http://localhost:3000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );
  console.log(data);

  if (isLoading) return <Loader />;

  return (
    <div className="text-white w-full bg-slate-700 order-1 md:order-none rounded-xl sticky top-0">
      <div className="w-full flex flex-col items-center justify-start ">
        <SearchResults data={data.length} />
        <ListOfHotels data={data} isLoading={isLoading} />
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
