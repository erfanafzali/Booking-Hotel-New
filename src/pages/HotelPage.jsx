import ListOfHotels from "../components/templates/ListOfHotels";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "./HomePage";
import useFetch from "../hooks/useFetch";

function HotelPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const option = JSON.parse(searchParams.get("option"));
  const date = JSON.parse(searchParams.get("date"));

  const { adult, children, room } = option;

  const { data, isLoading } = useFetch(
    BASE_URL,
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );
  console.log(data);

  // name_like

  return (
    <div className="text-white w-full bg-slate-700 order-1 md:order-none rounded-xl h-screen">
      <div className="w-full flex flex-col items-center justify-start">
        <SearchResults data={data?.length} />
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
