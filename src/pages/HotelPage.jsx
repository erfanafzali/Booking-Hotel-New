import ListOfHotels from "../components/templates/ListOfHotels";

function HotelPage() {
  return (
    <div className="text-white w-full bg-slate-700 order-1 md:order-none">
      <div className="w-full flex flex-col items-center justify-start">
        <SearchResults />
        <ListOfHotels />
      </div>
    </div>
  );
}

export default HotelPage;

function SearchResults() {
  return (
    <div className="w-full flex text-xl font-bold text-slate-300 justify-center items-center">
      <p>Search results :</p>
      <span>()</span>
    </div>
  );
}
