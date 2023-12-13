import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";

const markers = [
  {
    geocode: [0.3152, 32.5816],
    popUp: "Kampala",
  },
  {
    geocode: [9.0192, 38.7525],
    popUp: "Addis Ababa",
  },
  {
    geocode: [-3.3869, 36.683],
    popUp: "Arusha",
  },
  {
    geocode: [-1.9441, 30.0619],
    popUp: "Kigali",
  },
  {
    geocode: [-4.0435, 39.6682],
    popUp: "Mombasa",
  },
];

const customIcon = new Icon({
  iconUrl: "./images/icon _location_pin.png",
  iconSize: [20, 30],
});

const Map = () => {
  return (
    <div>
      <div className="!important flex flex-col justify-center items-center my-6rem">
        <h2>Project Locations</h2>
      </div>
      <MapContainer center={[0.3152, 32.5816]} zoom={6}>
        <TileLayer
          attribution='copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker
            key={marker.geocode}
            position={marker.geocode}
            icon={customIcon}
          >
            <Popup>
              <p>{marker.popUp}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
