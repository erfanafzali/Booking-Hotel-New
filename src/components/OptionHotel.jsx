import { useRef } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick";

function OptionHotel({ openOption, setOption, option, setOpenOption }) {
  // handle increment & decrement with opration arguman
  // seperator prev option number default and dynamic name =>[name]==> type

  const handlerOption = (name, opration) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]:
          opration === "inc"
            ? option[name] + 1
            : opration === "dec"
            ? option[name] - 1
            : "",
      };
    });
  };

  return (
    <div className="cursor-pointer flex justify-center items-center flex-col relative">
      <ul
        id="optionDropDown"
        onClick={() => setOpenOption(!openOption)}
        className="flex font-semibold justify-center items-center gap-x-3 border-slate-200 border rounded-xl px-3 bg-slate-500 text-slate-200 py-1.5 lg:text-sm xl:text-base"
      >
        <li className="space-x-2">
          <span>Adult:</span>
          <span>{option.adult}</span>
        </li>
        <li className="space-x-2">
          <span>Children:</span>
          <span>{option.children}</span>
        </li>
        <li className="space-x-2">
          <span>Room:</span>
          <span>{option.room}</span>
        </li>
      </ul>
      {openOption && (
        <ListOptions
          option={option}
          handlerOption={handlerOption}
          setOpenOption={setOpenOption}
        />
      )}
    </div>
  );
}

export default OptionHotel;

function ListOptions({
  option,
  handlerOption,
  setOpenOption,
}) {
  const optionRef = useRef();
  useOutsideClick(optionRef, "optionDropDown", () => setOpenOption(false));

  return (
    <div
      ref={optionRef}
      className="lg:absolute mt-3 md:mt-0 w-64 rounded-lg bg-slate-300 top-12 space-y-1 py-1"
    >
      <Option
        option={option}
        type="adult"
        minLimit={1}
        maxLimit={9}
        handlerOption={handlerOption}
      />
      <Option
        option={option}
        type="children"
        minLimit={0}
        maxLimit={9}
        handlerOption={handlerOption}
      />
      <Option
        option={option}
        type="room"
        minLimit={1}
        maxLimit={9}
        handlerOption={handlerOption}
      />
    </div>
  );
}

function Option({ option, type, handlerOption, minLimit, maxLimit }) {
  return (
    <div className="flex justify-around items-center w-full pl-7">
      <h1 className=" w-[20%]">{type}</h1>
      <div className="flex justify-center gap-x-3 items-center w-[80%]">
        <button
          disabled={option[type] >= maxLimit}
          onClick={() => handlerOption(type, "inc")}
        >
          <FaPlus />
        </button>
        {option[type]}
        <button
          disabled={option[type] <= minLimit}
          onClick={() => handlerOption(type, "dec")}
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
}
