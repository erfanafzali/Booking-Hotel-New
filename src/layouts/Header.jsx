import { IoHome } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import OptionHotel from "../components/OptionHotel";
import DatePickerHotel from "../components/DatePickerHotel";
import SearchHotel from "../components/SearchHotel";
import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const optionData = {
  adult: 1,
  children: 0,
  room: 1,
};

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

function Header() {
  const [searchParams] = useSearchParams();
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState(optionData);
  const [date, setDate] = useState([selectionRange]);
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();

  const searchHandler = () => {
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      option: JSON.stringify(option),
      destination,
    });

    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center py-4 px-3 md:px-5 bg-slate-400  rounded-lg gap-y-4 mb-12">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row gap-y-2 gap-x-20">
        <SearchHotel
          destination={destination}
          setDestination={setDestination}
        />
        <div className=" flex-col flex md:flex-row md:items-start lg:items-center  justify-center items-center gap-x-3 gap-y-4">
          <DatePickerHotel
            date={date}
            setDate={setDate}
            openDate={openDate}
            setOpenDate={setOpenDate}
          />
          <OptionHotel
            openOption={openOption}
            option={option}
            setOption={setOption}
            setOpenOption={setOpenOption}
          />
        </div>
      </div>
      <button
        onClick={searchHandler}
        className=" w-full lg:w-auto md:px-3 md:py-3 bg-slate-300 rounded-lg py-1.5 flex justify-center items-center"
      >
        <FiSearch className="hidden lg:flex" />
        <p className="flex lg:hidden font-bold text-slate-600 justify-center items-center">
          Search ...
        </p>
      </button>
    </div>
  );
}

export default Header;
