import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { format } from "date-fns";

function DatePickerHotel({ date, setDate, openDate, setOpenDate }) {
  console.log(date);

  return (
    <div
      id="outsideDateId"
      className="ursor-pointer flex justify-center items-center flex-col relative"
    >
      <div onClick={() => setOpenDate(!openDate)} className="">
        {`${format(date[0].startDate , "MM/dd/yyyy")} to ${format(date[0].endDate , "MM/dd/yyyy")}`}
      </div>

      {openDate && (
        <Calendar setOpenDate={setOpenDate} date={date} setDate={setDate} />
      )}
    </div>
  );
}

export default DatePickerHotel;

function Calendar({ setOpenDate, date, setDate }) {
  const dateRef = useRef();
  useOutsideClick(dateRef, "outsideDateId", () => setOpenDate(false));

  return (
    <div ref={dateRef} className="md:absolute  top-6 ">
      <DateRange
        onChange={(item) => setDate([item.selection])}
        ranges={date}
        minDate={new Date()}
        moveRangeOnFirstSelection={true}
        className="rounded-xl bg-slate-300"
      />
    </div>
  );
}
