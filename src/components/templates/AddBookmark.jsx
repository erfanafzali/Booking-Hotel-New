import { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useUrlLocation from "../../hooks/useUrlLocation";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";
import truncateText from "../../utils/truncateText";
import Loader from "../../modules/Loader";
import { useBookmarks } from "../../context/BookmarkContext";

const BASE_GEOCODING_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

function AddBookmark() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isGeoLoading, setIsGeoLoading] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState(null);
  const { createBookmark } = useBookmarks();

  useEffect(() => {
    if (!lat || !lng) return;
    async function getGeoLocationData() {
      try {
        setIsGeoLoading(true);
        setGeoCodingError(null);
        const { data } = await axios.get(
          `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
        );
        if (!data.countryCode) throw new Error("This location is not a City");
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        setGeoCodingError(error.message);
        console.log(error);
      } finally {
        setIsGeoLoading(false);
      }
    }
    getGeoLocationData();
  }, [lat, lng]);

  const handleAddBookmark = async (e) => {
    e.preventDefault();
    if (!cityName || !country) return null;

    const newBookmark = {
      cityName,
      country,
      countryCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + " " + country,
    };
    await createBookmark(newBookmark);
    navigate("/bookmarks");
  };

  if (isGeoLoading) return <Loader />;
  if (geoCodingError)
    return (
      <div className="w-full bg-slate-700 text-white font-bold min-h-32 py-4 px-3 rounded-xl">
        {geoCodingError}
      </div>
    );

  return (
    <div className="w-full bg-slate-700 pb-8 rounded-xl">
      <h2 className="w-full text-center font-bold text-xl text-slate-200 pt-5">
        Bookmarks new location
      </h2>
      <form
        onSubmit={handleAddBookmark}
        className="flex flex-col justify-center items-center w-full gap-y-4 mt-6"
      >
        <div className="w-full flex flex-col justify-center items-start gap-y-2 px-4 relative">
          <label
            htmlFor="cityName"
            className="font-semibold text-slate-100 lg:text-lg"
          >
            CityName :
          </label>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            name="cityName"
            id="cityName"
            className="w-full py-1.5 rounded-xl bg-slate-400 px-4 text-slate-100 font-semibold outline-none border-none "
          />
          {/* <ReactCountryFlag svg countryCode={countryCode} className="absolute right-8 top-11"/> */}
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-y-2 px-4 relative">
          <label
            htmlFor="country"
            className="font-semibold text-slate-100 lg:text-lg"
          >
            Country :
          </label>
          <input
            value={truncateText(country, 30)}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            id="country"
            name="country"
            className="w-full py-1.5 rounded-xl bg-slate-400 px-4 text-slate-100 font-semibold outline-none border-none"
          />
          <ReactCountryFlag
            svg
            countryCode={countryCode}
            className="absolute right-8 top-11"
          />
        </div>
        <div className="w-full flex justify-between items-center px-4 mt-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="bg-slate-500 text-white px-8 py-1.5 rounded-xl font-bold flex justify-center items-center gap-x-2"
          >
            <IoChevronBackCircleSharp className="w-5 h-5" />
            <span>Back</span>
          </button>
          <button
            type="submit"
            className="bg-slate-500 text-white px-8 py-1.5 rounded-xl font-bold flex justify-center items-center gap-x-2"
          >
            <IoAddCircle className="w-5 h-5" />
            <span>Add</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookmark;
