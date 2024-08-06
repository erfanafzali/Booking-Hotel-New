import { useEffect, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGeoLocation from "../hooks/useGeoLocation";

function MapPage({ hotels }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const {
    isLoading: isGeoLoading,
    position: positionGeo,
    getPosition,
  } = useGeoLocation();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (positionGeo?.lat && positionGeo?.lng) {
      return setMapCenter([positionGeo.lat, positionGeo.lng]);
    }
  }, [positionGeo]);

  return (
    <div className=" order-0 md:order-none w-full  flex flex-col justify-center items-center  leaflet-control ">
      <MapContainer
        className="w-[100%]  h-screen rounded-xl border-2 border-slate-300"
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
      >
        <button
          onClick={getPosition}
          className="bg-blue-600 px-2 py-1 rounded-md !z-50 absolute text-white font-semibold mb-1 ml-1 bottom-0 left-0"
        >
          {isGeoLoading ? "Loading..." : "Use your location"}
        </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <DetectClick />
        <ChangeCenter position={mapCenter} />
        {hotels?.map((item) => (
          <Marker key={item.id} position={[lat || 51, lng || 10]}>
            <Popup>{item.host_location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`/bookmark?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}
