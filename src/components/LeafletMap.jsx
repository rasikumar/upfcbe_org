import { useEffect, useRef, useState } from "react";
import leaflet from "leaflet";
import useLocalStorage from "@/hooks/useLocalStorage";
import useGeolocation from "@/hooks/useGeolocation";

export default function Map() {
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });

  const [nearbyMarkers, setNearbyMarkers] = useLocalStorage(
    "NEARBY_MARKERS",
    []
  );

  const [branches, setBranches] = useState([
    { name: "Chennai", latitude: 13.0827, longitude: 80.2707 },
    { name: "Coimbatore", latitude: 11.0168, longitude: 76.9558 },
    { name: "Madurai", latitude: 9.9252, longitude: 78.1198 },
  ]);

  const location = useGeolocation();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = leaflet
        .map("map", {
          minZoom: 7,
          maxZoom: 7,
          zoomControl: false,
          maxBounds: [
            [8.0, 76.0],
            [14.0, 81.0],
          ],
        })
        .setView([userPosition.latitude, userPosition.longitude], 7);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapRef.current);

      nearbyMarkers.forEach(({ latitude, longitude }) => {
        leaflet
          .marker([latitude, longitude])
          .addTo(mapRef.current)
          .bindPopup(
            `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
          );
      });
    }
  }, []);

  useEffect(() => {
    setUserPosition({ ...userPosition });

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    mapRef.current.setView([location.latitude, location.longitude]);
  }, [location, userPosition.latitude, userPosition.longitude]);

  useEffect(() => {
    if (mapRef.current) {
      branches.forEach(({ name, latitude, longitude }) => {
        leaflet
          .marker([latitude, longitude])
          .addTo(mapRef.current)
          .bindPopup(
            `<b>${name}</b><br>Lat: ${latitude.toFixed(
              2
            )}, Long: ${longitude.toFixed(2)}`
          );
      });
    }
  }, [branches]);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {/* Map Container */}
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      ></div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust transparency
          zIndex: 2, // Ensure overlay is above the map
        }}
      ></div>
    </div>
  );
}
