import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className=" flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#1638ce"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
