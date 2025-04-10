
import axios from "axios";
import { useEffect, useState } from "react"
import { MdArrowLeft, MdArrowRight } from "react-icons/md"


const VesselPagination = ({ currentPage, totalPages, setPage }) => {
    

 
  
  return (
    <>
      {/* VesselPagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
      <button
        className="p-2 hover:bg-gray-100 rounded-full"
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <MdArrowLeft className="size-6" />
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`w-8 h-8 rounded-full ${currentPage === i + 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="p-2 hover:bg-gray-100 rounded-full"
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        <MdArrowRight className="size-6" />
      </button>
    </div>
    </>
  )
}

export default VesselPagination