import React, { useEffect, useState } from 'react'
import Pagination from "../../../../components/Pagination.jsx";

const FlightData = ({drones}) => {

    const [formattedTime, setFormattedTime] = useState("");

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const pad = (n) => n.toString().padStart(2, "0");

        const year = pad(date.getFullYear() % 100);
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
    };

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(formatTimestamp(Date.now()));
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center bg-transparent w-full h-[90vh] p-7">
        <div className="flex flex-col bg-white rounded-[10px] min-w-full max-h-[600px] mt-24 p-3 overflow-scroll">
            <table className="table-fixed min-w-full max-h-[550px] overflow-scroll">
                <thead className="flex justify-between w-full bg-primary bg-opacity-[8%] sticky rounded-[10px]">
                    <tr className="flex justify-between w-full text-xs ">
                        <th className="p-3 flex justify-center items-center w-1/12">Date/Time</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">Drone ID</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">Vessels</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12 text-primary">Latitude</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12 text-primary">Longitude</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12 text-primary">Altitude(m)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">Latitude</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">Longitude</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">Altitude(m)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">AirSpeed(m/s)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">GroundSpeed(m/s)</th>
                        <th className="p-3 flex justify-center items-center text-center w-1/12">Battery(v)</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col justify-start w-full overflow-scroll text-xs">
                    {Object.values(drones).map((drone) => (<tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">{formattedTime}</td>
                        <td className="p-3 flex justify-center items-center w-1/12">{drone.systemid}</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.305 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.408 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">{`${Math.abs(drone.lat).toFixed(4)}° ${drone.lat >= 0 ? "N" : "S"}`}</td>
                        <td className="p-3 flex justify-center items-center w-1/12">{`${Math.abs(drone.lon).toFixed(3)}° ${drone.lat >= 0 ? "E" : "W"}`}</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">{drone.alt.toFixed(2)}</td>
                        <td className="p-3 flex justify-center items-center w-1/12">{drone.airspeed.toFixed(2)}</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">{drone.ground_speed.toFixed(2)}</td>
                        <td className="p-3 flex justify-center items-center w-1/12">{drone.battery_voltage}</td>
                    </tr>))}
                </tbody>
            </table>
            <Pagination/>
        </div>
    </div>
  )
}

export default FlightData;