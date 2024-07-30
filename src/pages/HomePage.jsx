import useFetch from "../hooks/useFetch";
import Loader from "../modules/Loader";
import truncateText from "../utils/truncateText";

const BASE_URL = "http://localhost:3000/hotels";

function HomePage() {
  const { data, isLoading } = useFetch(BASE_URL);

  const showData = data.slice(0, 6);
  if (isLoading) return <Loader />;

  return (
    <div className="w-full mb-24">
      <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  justify-center items-start gap-x-4 gap-y-4 w-full">
        {showData.map((item) => (
          <li
            key={item.id}
            className="w-full  bg-slate-700 min-h-[450px] md:max-h-[500px] lg:max-h-[490px] xl:max-h-[470px] rounded-lg pb-10 overflow-hidden"
          >
            <img
              src={item.medium_url}
              alt={item.name}
              className="w-full max-h-64 min-h-64 "
            />
            <h1 className="w-full text-center font-bold  lg:text-lg pt-3 text-slate-200">
              {truncateText(item.name, 20)}
            </h1>
            <div className="w-full flex flex-col justify-center items-start mt-4 px-5">
              <p className="text-slate-300">{item.smart_location}</p>
              <p className="mt-2 text-slate-300">
                {truncateText(String(item.space), 90)}
              </p>
              <p className="w-full text-center font-bold text-white mt-5 text-xl bg-slate-800 py-1 rounded-lg">
                <span>Price:</span>
                <span> €{item.price}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
