function SearchHotel({ destination, setDestination }) {
  return (
    <div className=" lg:w-auto flex justify-center items-center w-full mb-2 md:mb-0">
      <input
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="where ... ?"
        type="text"
        className="w-[80%] md:w-2/3 px-4 md:px-4 lg:w-full placeholder:text-slate-200 lg:px-6 py-1 rounded-xl bg-slate-500 border-slate-200 border outline-none text-slate-50"
      />
    </div>
  );
}

export default SearchHotel;
