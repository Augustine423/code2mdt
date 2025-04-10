


import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const PaginationAPI  = ({ currentPage, totalPages, setPage }) => {

 
  // Don't render if there's only one page
  if (totalPages <= 1) return null;

  
    
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        className="p-2 hover:bg-gray-100 rounded-full"
        disabled={currentPage === 0}
        onClick={() => setPage(currentPage - 1)}
      >
        <MdArrowLeft className="size-6" />
      </button>
      
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`w-8 h-8 rounded-full ${
            currentPage === i + 1 
              ? "  bg-blue-600 text-white" 
              : "hover:bg-blue-400"
          }`}
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
  );
};

export default PaginationAPI ;