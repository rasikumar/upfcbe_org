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

  // Branch locations (replace with your actual branches)
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
            [8.0, 76.0], // Southwest coordinates (approximate bounds for Tamil Nadu)
            [14.0, 81.0], // Northeast coordinates
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

      // Disable the click event listener
      // mapRef.current.addEventListener("click", (e) => {
      //   const { lat: latitude, lng: longitude } = e.latlng;
      //   leaflet
      //     .marker([latitude, longitude])
      //     .addTo(mapRef.current)
      //     .bindPopup(
      //       `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
      //     );

      //   setNearbyMarkers((prevMarkers) => [
      //     ...prevMarkers,
      //     { latitude, longitude },
      //   ]);
      // });
    }
  }, []);

  // Update user marker and center map
  useEffect(() => {
    setUserPosition({ ...userPosition });

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    // Remove the user marker addition
    // userMarkerRef.current = leaflet
    //   .marker([location.latitude, location.longitude])
    //   .addTo(mapRef.current)
    //   .bindPopup("User");

    // const el = userMarkerRef.current.getElement();
    // if (el) {
    //   el.style.filter = "hue-rotate(120deg)";
    // }

    mapRef.current.setView([location.latitude, location.longitude]);
  }, [location, userPosition.latitude, userPosition.longitude]);

  // Add Branches to Map
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

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}
