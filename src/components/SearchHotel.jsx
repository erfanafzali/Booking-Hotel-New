function SearchHotel({ destination, setDestination }) {
  return (
    <form className=" lg:w-auto flex justify-center items-center w-full mb-2 md:mb-0">
      <input
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="where ... ?"
        type="text"
        name="destination"
        id="destination"
        className="w-[260px] md:w-[300px] lg:w-[200px] xl:w-[290px] px-4 md:px-4  placeholder:text-slate-200 lg:px-6 py-1.5 rounded-xl bg-slate-500 border-slate-200 border outline-none text-slate-50"
      />
    </form>
  );
}

export default SearchHotel;
