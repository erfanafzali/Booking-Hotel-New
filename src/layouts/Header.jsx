import { IoHome } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import OptionHotel from "../components/OptionHotel";
import DatePickerHotel from "../components/DatePickerHotel";
import SearchHotel from "../components/SearchHotel";
import { useState } from "react";

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
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState(optionData);
  const [date, setDate] = useState([selectionRange]);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center py-4 px-3 md:px-5 bg-slate-400  rounded-lg gap-y-4 mb-12">
      <nav className="w-full flex flex-col justify-center items-center lg:flex-row gap-y-2 gap-x-20">
        <SearchHotel />
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
      </nav>
      <button className=" w-full lg:w-auto md:px-3 md:py-3 bg-slate-300 rounded-lg py-1.5 flex justify-center items-center">
        <FiSearch className="hidden lg:flex" />
        <p className="flex lg:hidden font-bold text-slate-600 justify-center items-center">
          Search ...
        </p>
      </button>
    </div>
  );
}

export default Header;
