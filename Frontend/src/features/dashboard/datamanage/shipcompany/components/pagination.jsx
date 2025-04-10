import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Don't render if no pages or only one page
  if (!totalPages || totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous button */}
      <button
        className={`p-2 rounded-full ${currentPage === 0 ? 'text-gray-400 cursor-default' : 'hover:bg-gray-100'}`}
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <MdArrowLeft className="size-6" />
      </button>
      
      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`w-8 h-8 rounded-full ${
            currentPage === i 
              ? "bg-blue-600 text-white" 
              : "hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i + 1} {/* Display as 1-based */}
        </button>
      ))}
      
      {/* Next button */}
      <button
        className={`p-2 rounded-full ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-default' : 'hover:bg-gray-100'}`}
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <MdArrowRight className="size-6" />
      </button>
    </div>
  );
};

export default Pagination;