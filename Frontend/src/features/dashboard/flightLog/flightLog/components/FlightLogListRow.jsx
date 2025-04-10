

import { Download, Ellipsis } from "lucide-react"
import { Link } from "react-router-dom"


const FlightLogListRow = ({ flightlog: {id, occurrenceTime, no, fileName ,author,date} }) => {
  return (
    <>
      <tr id="printArea" className="hover:bg-gray-100 border-b">
        {/* Occurrence Time */}
        <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap ">
          {occurrenceTime}
        </td>

        {/* No */}
        <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {no}
        </td>

        {/* File Name */}
        <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {fileName}
        </td>

        {/* Author */}
        <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {author}
        </td>

        {/* Date */}
        <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
          {date}
        </td>

        {/* Action Buttons */}
        <td className=" py-4 text-sm">
          <div className="flex justify-center items-center gap-6">
            {/* Download Icon */}
            <Download className="size-6 text-gray-400 hover:text-gray-600 cursor-pointer" />

            {/* Details Link */}
            <Link
              to={`/dashboard/flightLog-detail/${id}`}
              className="text-gray-400 hover:text-gray-600"
            >
              <Ellipsis className="size-6" />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default FlightLogListRow