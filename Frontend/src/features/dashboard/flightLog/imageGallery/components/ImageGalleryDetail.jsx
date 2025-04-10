import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchImageById } from "../../../../../stores/informationData/imageGallerySlice";
import { Download } from "lucide-react";

const ImageGalleryDetail = () => {
  const { id } = useParams();

  console.log(id);

  const dispatch = useDispatch();

  // Fetch company details when the component mounts
  useEffect(() => {
    dispatch(fetchImageById(id));
  }, [dispatch, id]);

  // Access the fetched company details from the Redux store
  const currentImage = useSelector((state) => state.images.currentImage);

  const loading = useSelector((state) => state.images.loading);
  const error = useSelector((state) => state.images.error);

  // Display loading or error states
  if (loading) {
    return <p>Loading company details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Prevent rendering if currentCompany is undefined
  if (!currentImage) {
    return <p className="text-red-500">Company not found.</p>;
  }

  console.log(currentImage);
  return (
    <>
    <div className="px-8 py-8 shadow-md rounded-lg bg-white mx-4 ">
        {/* Header */}
        <div className="pb-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
            {currentImage.imageName}
          </h1>

          <div className="mt-6 space-y-6 text-sm text-gray-600">
            <div className="flex space-x-28 items-center pl-10">
              <span className="text-sm font-medium text-black">Date</span>
              <p className="text-gray-700 px-4">{currentImage.date}</p>
            </div>

            <div className="flex space-x-28 items-center pl-10">
              <span className="text-sm font-medium text-black">Author</span>
              <p className="text-gray-700 px-1">{currentImage.author}</p>
            </div>

            <div className="space-y-6 pl-10">
              <div className="flex space-x-28 items-center">
                <span className="text-sm font-medium text-black px-4">File</span>
                <div className="flex items-center space-x-3">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-700 hover:underline"
                  >
                    File
                  </Link>
                  <Download className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              <div className="flex space-x-32 items-center">
                <span className="text-sm font-medium text-gray-500 p-1"></span>
                <div className="flex items-center space-x-3 px-7">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-700 hover:underline"
                  >
                    File
                  </Link>
                  <Download className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Previews */}
        <div className="flex flex-col items-center space-y-6 mb-4">
          <img
            src={currentImage.image1}
            alt=""
            className="object-cover w-[900px] h-[600px]"
          />
          <img
            src={currentImage.image2}
            alt=""
            className="object-cover w-[900px] h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default ImageGalleryDetail;
