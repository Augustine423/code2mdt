import React from 'react'
import Pagination from "../../../../components/Pagination.jsx";

const FlightData = () => {
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
                    <tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/12">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.3054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">35.3054 N</td>
                        <td className="p-3 flex justify-center items-center w-1/12">148.40883 S</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">426.15</td>
                        <td className="p-3 flex justify-center items-center w-1/12">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                    </tr>
                    <tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/12">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.3054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">35.3054 N</td>
                        <td className="p-3 flex justify-center items-center w-1/12">148.40883 S</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">426.15</td>
                        <td className="p-3 flex justify-center items-center w-1/12">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                    </tr>
                    <tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/12">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.3054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">35.3054 N</td>
                        <td className="p-3 flex justify-center items-center w-1/12">148.40883 S</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">426.15</td>
                        <td className="p-3 flex justify-center items-center w-1/12">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                    </tr>
                    <tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/12">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.3054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">35.3054 N</td>
                        <td className="p-3 flex justify-center items-center w-1/12">148.40883 S</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">426.15</td>
                        <td className="p-3 flex justify-center items-center w-1/12">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                    </tr>
                    <tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/12">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.3054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">35.3054 N</td>
                        <td className="p-3 flex justify-center items-center w-1/12">148.40883 S</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">426.15</td>
                        <td className="p-3 flex justify-center items-center w-1/12">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                    </tr>
                    <tr className="flex justify-between w-full border-b-0.5 p-2 text-xs">
                        <td className="p-3 flex justify-center items-center w-1/12">25.01.01 12:10:30</td>
                        <td className="p-3 flex justify-center items-center w-1/12">10</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">Colombia</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">35.3054 N</td>                
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">148.40883 S</td>
                        <td className="p-3 flex justify-center items-center w-1/12 text-primary">426.15</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">35.3054 N</td>
                        <td className="p-3 flex justify-center items-center w-1/12">148.40883 S</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">426.15</td>
                        <td className="p-3 flex justify-center items-center w-1/12">56.12</td>                
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                        <td className="p-3 flex justify-center items-center w-1/12">1000</td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    </div>
  )
}

export default FlightData;