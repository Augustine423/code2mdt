import { MapContainer, TileLayer, Marker, Polyline, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import TopBar from "../../components/TopBar";
import { RxCross2 } from "react-icons/rx";
import { IoInformationCircle } from "react-icons/io5";
import { useEffect, useMemo, useRef, useState } from "react";
import FlightMapDetails from "./FlightMapDetails";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";
import { ImVideoCamera } from "react-icons/im";
import useTranslations from "../../../../components/Language";
import Footer from "../../../../components/Footer";
import FlightData from "./FlightData";

const RealTimeInfo = () => {
  // const [ships, setShips] = useState([]);
  const [drones, setDrones] = useState({});
  const [selectedDrone, setSelectedDrone] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [altt, setAltt] = useState(0);
  const [airSpeed, setAirSpeed] = useState(0);
  const [groundSpeed, setGroundSpeed] = useState(0);
  const [battery, setBattery] = useState(0);
  const [systemID, setSystemID] = useState("");
  const [shipPosition, setShipPosition] = useState([]);
  const reconnectInterval = useRef(null);

  console.log(selectedDrone)

  console.log(systemID)
  // console.log(shipPosition)
  // const [droneStates, setDroneStates] = useState(
  //   data.drones.reduce((acc, drone) => {
  //     acc[drone.id] = {
  //       position: drone.position,
  const droneIcon = (rotation) => 
    new L.DivIcon({
      className: "custom-drone-icon",
      html: `<div style="transform: rotate(${rotation}deg);"><img src="droneIcon.png" width="40" height="40"/></div>`,
      iconSize: [25, 25],
    });

    const shipIcons = [
      "vessel(Navy).png",
      "vessel(blue).png",
      "vessel(green).png",
      "vessel(lightYellow).png",
      "vessel(olive).png",
      "vessel(orange).png",
      "vessel(pink).png",
      "vessel(Purple).png",
      "vessel(red).png",
      "vessel(Yellow).png",
    ];
    
    const getShipIcon = (index) => {
      const hash = index;
      return shipIcons[hash % shipIcons.length];
    };
    
    const shipsWithIcons = useMemo(() => {
      return shipPosition.map((ship, index) => ({
        ...ship,
        icon: getShipIcon(index),
      }));
    }, [shipPosition]);

    console.log(shipsWithIcons)
    
    // const shipIcon = new L.Icon({
    //   iconUrl: getRandomIcon(),  // Assigns a random icon
    //   iconSize: [20, 20],
    //   iconAnchor: [10, 10], // Adjust anchor point for centering
    //   popupAnchor: [0, -10],
    // });

  //       index: 0,
  //     };
  //     return acc;
  //   }, {})
  // );
  // const intervalRefs = useRef({});
  // const animationActiveRefs = useRef({});

  const ws = useRef(null);

  useEffect(() => {
    const connectWebSocket = () => {
      console.log("Attempting WebSocket connection...");
      const wsUrl = "ws://52.79.57.3:8081/telemetry";
      // const wsUrl = "ws://52.79.57.3:8080/telemetry";
      ws.current = new WebSocket(wsUrl);

      ws.current.onopen = () => {
        console.log("WebSocket connected.");
        if (reconnectInterval.current) {
          clearInterval(reconnectInterval.current);
          reconnectInterval.current = null;
        }
      };

      ws.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.drones && Array.isArray(data.drones)) {
            const updatedDrones = {};
            let updatedLat = null;
            let updatedLon = null;
            let updatedAlt = null;
            let updatedAirSpeed = null;
            let updatedGroundSpeed = null;
            let updatedBattery = null;
            // const updatedShipPosition = [];
            data.drones.forEach((drone) => {
              drone.waypoints = Array.isArray(drone.waypoints) ? drone.waypoints : [];
              updatedDrones[drone.GCS_IP] = drone;
              updatedLat = `${Math.abs(drone.lat)}° ${drone.lat >= 0 ? "N" : "S"}`;
              updatedLon = `${Math.abs(drone.lon)}° ${drone.lat >= 0 ? "E" : "W"}`;
              updatedAlt = drone.alt;
              updatedAirSpeed = drone.airspeed;
              updatedGroundSpeed = drone.ground_speed;
              updatedBattery = drone.battery_current;
              const newShipPositions = data.drones.map((drone) => drone.home_location);
              setShipPosition(newShipPositions);
            });
            setDrones(updatedDrones);
            setLat(updatedLat);
            setLon(updatedLon);
            setAltt(updatedAlt);
            setAirSpeed(updatedAirSpeed);
            setGroundSpeed(updatedGroundSpeed);
            setBattery(updatedBattery);

            // setShipPosition(updatedShipPosition);
            console.log(updatedDrones);
            // console.log(updatedShipPosition);
          } else {
            console.warn("Invalid WebSocket data:", data);
          }
        } catch (error) {
          console.error("Error parsing WebSocket data:", error);
        }
      };

      ws.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      ws.current.onclose = () => {
        console.warn("WebSocket disconnected, retrying...");
        if (!reconnectInterval.current) {
          reconnectInterval.current = setInterval(connectWebSocket, 5000);
        }
      };
    };

    connectWebSocket();

    return () => {
      if (ws.current) ws.current.close();
      if (reconnectInterval.current) clearInterval(reconnectInterval.current);
    };
  }, []);

  
const [videoView, setVideoView] = useState(false);
  const [shipDetails, setShipDetails] = useState(false);
  const [wayPointsVisible, setWayPointsVisible] = useState(true);

  const [isMapView, setIsMapView] = useState(true);
  const searchRef = useRef(null);
  const t = useTranslations();

  const handleSearchFocus = () => {
    searchRef.current.focus();
  };

  const shipData = [
    {
      Vessel: "Serena Ver.2",
      [t.captain]: "name",
      Latitude: lat,
      Longitude: lon,
    },
  ];

  const droneDataStatic = [
    {
      "Model": "MDT-V290",
      "Serial No": "MDT290I24060801",
      Latitude: lat,
      Longitude: lon,
      Altitude: altt+" M",
    }
  ];

  const droneRealTimeData = [
    {
      "Latitude": lat,
      "Longitude": lon,
      "Altitude": altt+" M",
      "Airspeed(m/s)": airSpeed,
      "Groundspeed(m/s)": groundSpeed,
      "Battery(V)": battery,
    }
  ];

  console.log(altt)

  const handleSelectedDrone = (systemID) => {
    const clickedDrone = drones.find((drone) => drone.systemid === systemID) || null;

    setSelectedDrone(clickedDrone); 
  }


  return (
    <div className={`w-full relative flex flex-col ${isMapView ? "min-h-screen": "h-auto"}`}>
      <div className="absolute top-0 left-0 w-full bg-transparent z-40 flex flex-col gap-2 p-3">
        <TopBar />
      </div>

      {shipDetails && (
        <div className="absolute top-[60px] left-7 w-3/12 h-6/6 bg-white z-40 flex flex-col rounded-md shadow-md">
          {/* Ship Name */}
          <div className="w-full pt-1 pb-1 pl-3 pr-3 flex justify-between items-center bg-transparent shadow-md">
            <span className="font-semibold">Serena ver.2</span>
            <div className="flex justify-center items-center gap-2">
              <img src="video_icon.png" className="text-primary cursor-pointer object-contain size-5" onClick={() => setVideoView(true)}/>
              <RxCross2 size={"20px"} onClick={() => setShipDetails(!shipDetails)} className="text-primary cursor-pointer" />
            </div>
            
          </div>

          {/* Ship Image */}
          <div className="w-full object-contain">
            <img src="shipImage_example.jpg" alt="Ship Image" className="w-full h-36" />
          </div>

          {/* Vessels Info */}
          <div className="w-full flex pb-1 pl-3 flex-col">
            <div className="w-full flex items-end justify-start gap-1">
              <div className="flex justify-center items-center text-[16px] text-center font-semibold">Vessels Info</div>
              <IoInformationCircle size={"20px"} className="text-gray-400" />
            </div>
            {shipData.map((ship, index) => (
            <div className="w-full flex flex-wrap mt-2 border-b-0.5 text-[14px]">
              {Object.entries(ship).map(([key, value]) => (
                <div className="w-1/2 flex flex-col mb-1" key={key}>
                  <div className="w-full flex items-center text-[12px] text-gray-500">{key}</div>
                  <div className="w-full flex items-center font-semibold">{value}</div>
                </div>
              ))}
            </div>))}
          </div>

          {/* Drone Info */}
          <div className="w-full flex pb-1 pl-3 flex-col">
            <div className="w-full flex items-end justify-start gap-1">
              <div className="flex justify-center items-center text-[16px] text-center font-semibold">Drone Info</div>
              <IoInformationCircle size={"20px"} className="text-gray-400" />
            </div>
            {droneDataStatic.map((drone) => (
            <div className="w-full flex flex-wrap mt-1 border-b-0.5 text-[14px]">
              {Object.entries(drone).map(([key, value]) => (
                <div className="w-1/2 flex flex-col mb-1" key={key}>
                  <div className="w-full flex items-center text-[12px] text-gray-500">{key}</div>
                  <div className="w-full flex items-center font-semibold text-primary">{value}</div>
                </div>
              ))}
            </div>
            ))}

          {droneRealTimeData.map((drone) => (
            <div className="w-full flex flex-wrap mt-2 border-b-0.5 text-[14px]">
              {Object.entries(drone).map(([key, value]) => (
                <div className="w-1/2 flex flex-col mb-2" key={key}>
                  <div className="w-full flex items-center text-[12px] text-gray-500">{key}</div>
                  <div className="w-full flex items-center font-semibold">{value}</div>
                </div>
              ))}
            </div>
            ))}
          </div>

          {/* Pilot Info */}
          <div className="w-full flex pt-1 pb-0 pl-3 flex-col">
            <div className="w-full flex items-end justify-start gap-1">
              <div className="flex justify-center items-center text-[16px] text-center font-semibold">Pilot Info</div>
            </div>
            <div className="w-full flex flex-col flex-wrap mt-2 text-[14px]">
              <div className="w-full flex mb-2">
                <div className="w-1/2 flex items-center text-[12px] text-gray-500">Internal pilot</div>
                <div className="w-1/2 flex justify-center items-center font-semibold gap-1">
                  <img src="dronePilotExample.jpg" alt="Pilot Image" className="w-7 h-7 rounded-full object-contain border-0.5" />
                  <span className="font-semibold">name</span>
                  <IoInformationCircle size={"15px"} className="text-gray-400" />
                </div>
              </div>
              <div className="w-full flex mb-2">
                <div className="w-1/2 flex items-center text-[12px] text-gray-500">Outside pilot</div>
                <div className="w-1/2 flex justify-center items-center font-semibold gap-1">
                  <img src="dronePilotExample.jpg" alt="Pilot Image" className="w-7 h-7 rounded-full object-contain border-0.5" />
                  <span className="font-semibold">name</span>
                  <IoInformationCircle size={"15px"} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-[70px] right-3 bg-transparent z-40 flex justify-between items-center gap-1">
        <div className="w-[370px] bg-white flex justify-between items-center rounded-md shadow-lg pl-1 pt-1 pb-1">
          <input type="text" placeholder={t.quickSearch} className="p-2 rounded-sm bg-transparent text-sm w-5/6" ref={searchRef} />
          <IoMdSearch className="w-1/6 text-2xl text-[#767676] cursor-pointer" onClick={handleSearchFocus} />
        </div>
        
        <div className="flex justify-center items-center gap-2 ml-4 text-[#767676]">
          <AiOutlineMenu className={`text-xl cursor-pointer ${!isMapView ? `text-primary` : `text-[#767676]`}`}
           onClick={() => {
              setIsMapView(false);
              setShipDetails(false);
            }}/>
          <FaMap className={`text-xl cursor-pointer ${isMapView ? `text-primary` : `text-[#767676]`}`} onClick={() => setIsMapView(true)}/>
        </div>

        <div className="flex justify-center items-center ml-4 mr-4 gap-1 text-[#767676] cursor-pointer">
          <BsFillPrinterFill className="text-xl"/>
          <span className="text-md">Print</span>
        </div>
      </div>

      <div className="w-full flex-1 relative">

        {isMapView ? (<MapContainer center={[35.0767, 129.0921]} zoom={7} style={{ height: "100vh", width: "100%" }}  className="z-0 w-full h-full" zoomControl={false}
                  trackResize={true}
                  attributionControl={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {shipsWithIcons.map((ship, index) => (
                          <Marker
                            key={index}
                            position={[ship.lat, ship.lon]}
                            icon={new L.Icon({
                              iconUrl: ship.icon,  
                              iconSize: [20, 20],
                              iconAnchor: [20, 40],
                              popupAnchor: [0, -40],
                            })}
                            eventHandlers={{ click: () => setShipDetails(true) }}
                          />
                        ))}
              {Object.values(drones).map((drone) => (
                <>
                <Marker
                  key={drone.GCS_IP}
                  position={[drone.lat, drone.lon]}
                  icon={droneIcon(drone.yaw)}
                  eventHandlers={{ click: () => {setShipDetails(true);
                    setSystemID(drone.systemid);
                    handleSelectedDrone(drone.systemid);
                  },
                  mouseover: () => {setSystemID(drone.systemid) }
                  }}
                >
                  <Popup>
                    <div>
                      <strong>Drone id:</strong> VT00{drone.systemid} / {drone.systemid} <br />
                      <strong>Latitude:</strong> {drone.lat} N<br />
                      <strong>Longitude:</strong> {drone.lon} E<br />
                      <strong>Altitude(m):</strong> {drone.alt} m <br />
                    </div>
                  </Popup>
                </Marker>
                <Polyline
                key={drone.GCS_IP}
                positions={drone.waypoints.map((waypoint) => [waypoint.lat, waypoint.lon])}
                color="red"
                opacity={0.5}
                weight={2}
                dashArray="5, 10"
              />
              </>
              ))}
            </MapContainer>):
            (<FlightData 
                drones={drones}/>)
          }
      </div>

      {videoView && <FlightMapDetails videoView={videoView} setVideoView={setVideoView} systemID={systemID}/>}
      {!isMapView && <Footer></Footer>}
    </div>
  );
};

export default RealTimeInfo;

