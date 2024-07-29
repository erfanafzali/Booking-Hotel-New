import { IoArrowBackOutline } from "react-icons/io5";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="w-full max-w-lg mx-auto pt-8  text-end mt-32">
      <h1 className="font-bold text-xl md:text-2xl w-full text-center">
        The page you were looking for was not found 😵‍💫
      </h1>
      <button
        onClick={moveBack}
        className="w-full flex justify-end items-center gap-x-4 mt-5"
      >
        <div className="w-full flex justify-center items-center gap-x-4">
          <IoArrowBackOutline className="  font-bold text-3xl text-blue-500 w-9 h-9" />
          <p className="font-bold text-2xl md:text-3xl  text-center text-blue-500">
            Back
          </p>
        </div>
      </button>
    </div>
  );
}

export default NotFound;
