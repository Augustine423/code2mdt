import { Clock, Edit, Info, MoreHorizontal, Trash } from "lucide-react";
import Pagination from "../../../../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "../../../../../stores/informationData/imageGallerySlice";
import { usePopup } from "../../../../../hooks/usePopup";
import { Link } from "react-router-dom";

const ImageGalleryList = () => {

  const dispatch = useDispatch();
    const { images, loading, error } = useSelector((state) => state.images || {});
    const popup = usePopup();
  
    useEffect(() => {
      dispatch(fetchImages());
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    // const handleDeleteBtn = async (companyId) => {
    //   if (!companyId) return;
    //   try {
    //     await dispatch(deleteCompany(companyId)).unwrap();
    //     dispatch(fetchCompanies());
    //   } catch (error) {
    //     console.error("Error while deleting company:", error);
    //   }
    // };

  // console.log(companies);

  return (
    <>
      {/* Grid Content */}
      <div className="px-4 py-8 shadow-md rounded-lg bg-white">
        <div className="grid grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-white  p-4">
              <div className="flex ">
                <img
                  src={image.image1}
                  alt={image.imageName}
                  className="w-1/2  object-cover"
                />
                <img
                  src={image.image2}
                  alt={image.imageName}
                  className="w-1/2  object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-700">
                    {image.imageName}
                  </p>
                  <div className="relative">
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => popup.open(image.id)}
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
                {popup.isOpen && popup.popupData === image.id && (
                  <div className="absolute right-0 w-35 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    //   onClick={() => handleDeleteBtn(image.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Trash className="size-5" />
                        <span className=" text-md">Delete</span>
                      </div>
                    </button>
                    <Link
                      to={`/dashboard/imageGallery-detail/${image.id}`}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={popup.close}
                    >
                      <div className="flex items-center gap-3">
                        <Info className="size-5" />
                        <span className=" text-md">Detail</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              {popup.isOpen && popup.popupData === image.id && <div className="fixed inset-0 z-0" onClick={popup.close} />}
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>
                    {image.date}, {image.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-8">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default ImageGalleryList;
