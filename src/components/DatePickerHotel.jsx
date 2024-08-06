import { FaCalendarAlt } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { format } from "date-fns";

function DatePickerHotel({ date, setDate, openDate, setOpenDate }) {
  return (
    <div className="ursor-pointer flex justify-center items-center flex-col relative !z-50">
      <div
        id="outsideDateId"
        onClick={() => setOpenDate(!openDate)}
        className="border px-4 py-1.5 rounded-xl bg-slate-500 font-semibold text-slate-200 flex justify-center items-center gap-x-3 "
      >
        <FaCalendarAlt />
        <span className="lg:text-sm xl:text-base">{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
        <span className="lg:text-sm xl:text-base">{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
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
    <div ref={dateRef} className="lg:absolute  top-12 md:my-0 my-4">
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
