import { useEffect, useRef, useState } from "react";
import leaflet from "leaflet";
import useLocalStorage from "@/hooks/useLocalStorage";
import useGeolocation from "@/hooks/useGeolocation";
import { BiDirections } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
    {
      name: "Old age home",
      latitude: 11.862290,
      longitude: 79.365356,
      street: "Thiruvennainallur,Villupuram District",
    },
    {
      name: "Old age home",
      latitude: 9.539867,
      longitude: 77.6197904,
      street: " Adi Annamalai, Thiruvannamalai",
    },
    {
      name: "Universal social service center",
      latitude: 10.8280539,
      longitude: 78.6731113,
      street: " Woraiyur, Trichy",
    },
    {
      name: "Destitute Elderly Free Home",
      latitude: 11.3652431,
      longitude: 77.7482633,
      street: "Pallipalayam, Namakkal",
    },
    {
      name: "Destitute Elderly Free Home",
      latitude: 10.827901778547341,
      longitude: 78.67230616773773,
      street: "Woraiyur, Trichy",
    },
    {
      name: "Old age home",
      latitude: 10.585500717163086,
      longitude: 77.25165557861328,
      street: "Udumalaipettai, Tirupur",
    },
    {
      name: "Destitute Elderly Free Home",
      latitude: 11.6639441,
      longitude: 78.1632265,
      street: "Maravaneri, Salem.",
    },
    {
      name: "Destitute Elderly Free Home",
      latitude: 11.5084285,
      longitude: 77.1408069,
      street: "Kothamangalam, Erode",
    },
    {
      name: "Free Service Center",
      latitude: 11.0746463,
      longitude: 77.3826845,
      street: "Amaravathi, Tirupur",
    },
    {
      name: "Universal social service center",
      latitude: 11.110695,
      longitude: 77.348045,
      street: "Thirumoorthi hills, Tirupur",
    },
    {
      name: "Destitute Elderly Free Home",
      latitude: 10.9729,
      longitude: 77.3698,
      street: "Pongalur, Tirupur",
    },
    {
      name: "Free home for the mentally retarded (Men)",
      latitude: 11.1418005,
      longitude: 77.3310067,
      street: "Angeripalayam , Tirupur",
    },
    {
      name: "Free home for the mentally retarded (Women)",
      latitude: 11.110695,
      longitude: 77.348045,
      street: "Periyar Colony,Tirupur",
    },
    {
      name: "stitute Elderly Free Home",
      latitude: 11.4010593,
      longitude: 76.712728,
      street: "Nondimedu, Ooty",
    },
    {
      name: "NSCB residnetial school (Management)",
      latitude: 11.1930,
      longitude: 77.2687,
      street: "Avinashi, Tirupur",
    },
    {
      name: "Destitute Elderly Free Home",
      latitude: 11.0873,
      longitude: 76.9920,
      street: "Saravanampatti, Coimbatore",
    },
    {
      name: "Free hospital and 24 Hrs Free ambulance",
      latitude: 11.0018115 , 
      longitude:76.9628425,
      street: "Coimbatore",
    },
    {
      name: "Children, parents, women, elders – free counselling and legal counselling center",
      latitude: 11.4568461730384,
      longitude: 77.4141437360659,
      street: "( Nallagoundanpalayam ), Coimbatore",
    },
    {
      name: "Blood, eye, skin and body parts donation and full body donation information center, destitute dead body burial information center",
      latitude: 11.4568461730384 , 
      longitude:77.4141437360659,
      street: "( Nallagoundanpalayam ), Coimbatore",
    },
    {
      name: "Orphans, destitute women, elders, differently abled, mentally challenged and mentally retarded free homes ",
      latitude:  11.4568461730384 , 
      longitude: 77.4141437360659,
      street: "(Nallagoundanpalayam), Coimbatore",
    },
  ]);

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const location = useGeolocation();

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    mapRef.current.setView([branch.latitude, branch.longitude], 15);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = leaflet
        .map("map", {
          minZoom: 7,
          maxZoom: 19,
          zoomControl: false, // Disable default zoom control
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
      branches.forEach(({ name, latitude, longitude, street }) => {
        leaflet
          .marker([latitude, longitude])
          .addTo(mapRef.current)
          .bindTooltip(`<b>${name}</b><br>${street}`, {
            permanent: true,
            direction: "top",
          })
          .on("click", () => {
            setSelectedBranch({ name, latitude, longitude, street });
          });
      });
    }
  }, [branches]);

  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {/* Zoom Controls */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      ></div>

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

      {/* Branch Details Overlay */}
      {selectedBranch && (
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 2,
          }}
        >
          <div>
            <h4 className="font-semibold">{selectedBranch.name}</h4>
            <p className="font-light text-sm">
              {selectedBranch.street} <br />
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.latitude},${selectedBranch.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4"
          >
            Get Directions <BiDirections />
          </a>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarVisible && (
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 10,
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 10,
            maxHeight: "90%",
            maxWidth: "30%",
            overflowY: "auto",
          }}
        >
          <ul>
            {branches.map((branch) => (
              <li
                key={branch.name}
                onClick={() => handleBranchClick(branch)}
                style={{
                  cursor: "pointer",
                  marginBottom: "5px",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor:
                    selectedBranch && selectedBranch.name === branch.name
                      ? "#f0f0f0"
                      : "transparent",
                }}
              >
                <b>{branch.name}</b>
                <br />
                <span className="font-light text-sm">{branch.street}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Toggle Sidebar Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: 10,
          left: isSidebarVisible ? "10px" : "10px",
          zIndex: 1000,
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        className="inline-flex items-center p-2 gap-2"
      >
        {isSidebarVisible ? <IoClose /> : <FaHamburger />} Branches
      </button>
    </div>
  );
}
