import { useState } from "react";
import { useHotels } from "../context/HotelsContext";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function MapPage() {
  const { data, hotels } = useHotels();
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);

  return (
    <div className=" order-0 md:order-none w-full  flex flex-col justify-center items-center  leaflet-control ">
      <MapContainer
        className="w-[100%]  h-screen rounded-xl border-2 border-slate-300"
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapCenter}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapPage;
