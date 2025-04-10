




import { FileUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const VideoGalleryRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission logic here
  };

  const navigate=useNavigate();

  return (
    <div className="pb-6 bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
    <form onSubmit={handleSubmit(onSubmit)} className="h-full p-4 ">
      <h2 className="text-lg font-semibold mb-6 border-b-2">Info Register</h2>

      {/* Arisen Date */}
      <div className="flex items-center mb-5 gap-6 pt-3">
        <label className="block text-sm font-medium mb-1">Title</label>
        <div className="flex-1 pl-10">
        <input
          type="text"
          placeholder="Please Enter"
          {...register("arisenDate", { required: "Date is required" })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.arisenDate && (
          <p className="text-red-500 text-sm mt-1">{errors.arisenDate.message}</p>
        )}
      </div>
      </div>

      {/* File Upload */}
      <div className="mb-8">
       
        <div className="flex justify-between items-center text-sm  mb-2">
        <label className="block text-sm font-medium mb-1">Insert File</label>
          <span className="flex items-center gap-1"><FileUp className="size-5"/> My PC File</span>
        </div>
        <label
          htmlFor="fileUpload"
          className="w-full border-2 border-dashed border-gray-300 rounded p-6 flex items-center justify-center cursor-pointer hover:bg-gray-50"
        >
          <span className="text-gray-500 flex items-center gap-2">📄Video Upload File </span>
        </label>
        <input
          type="file"
          id="fileUpload"
          {...register("file")}
          className="hidden"
        />
      </div>

      {/* Buttons */}
       {/* Buttons */}
       <div className="flex justify-end gap-4 mt-24">
            <button
              onClick={() => navigate("/dashboard/flightLog-overview")}
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-300 rounded-md text-primary hover:bg-primary hover:text-white"
            >
              Save
            </button>
          </div>
    </form>
    </div>
  );
}

export default VideoGalleryRegister;
