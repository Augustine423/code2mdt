import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addVessel,
  fetchVessels,
} from "../../../../../stores/informationData/vesselSlice";
import { useState } from "react";

const VesselRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const formData = new FormData();
  //        // Append all form fields
  //        Object.keys(data).forEach((key) => {
  //         formData.append(key, data[key]);
  //       });
  //     setSubmitError(null); // Clear previous errors
  //     console.log(data);
  //     const payload = {
  //       ...data,
  //       buildYear: data.buildYear
  //         ? new Date(data.buildYear).toISOString().split("T")[0]
  //         : null,
  //       shipLogo: selectedImage,
  //     };
  //     if (selectedImage) {
  //       formData.append("shipLogo", selectedImage);
  //     }


  //     await dispatch(addVessel(payload)).unwrap();
  //     dispatch(fetchVessels());
  //     navigate("/dashboard/vessel-overview");
  //     reset();
  //     setSelectedImage(null);
  //     setPreview(null);
  //   } catch (error) {
  //     setSubmitError(error.message || "Failed to save vessel"); // Set error message
  //     console.error("Error while saving vessel:", error);
  //   }
  // };

  
   const onSubmit = async (data) => {
    console.log(data);
      try {
        const formData = new FormData();
  
        // Convert date format
        if (data.buildYear) {
          data.buildYear = new Date(data.buildYear)
            .toISOString()
            .split("T")[0];
        }
  
        // Append all form fields
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });
  
        // Append the selected file if available
        if (selectedImage) {
          formData.append("shipLogo", selectedImage);
        }
  
        console.log("Submitting FormData:", formData);
  
        await dispatch(addVessel(formData)).unwrap();
        dispatch(fetchVessels());
        navigate("/dashboard/vessel-overview");
        reset();
        setSelectedImage(null);
        setPreview(null);
      } catch (error) {
        console.error("Error while saving Vessel:", error);
      }
    };

   

  return (
    <>
      <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10  flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Logo Upload */}

            <div className="col-span-1 flex flex-col items-center justify-center h-full" >
              <div className="w-64 relative">
                <div className="bg-gray-300 rounded-md h-36 flex flex-col items-center justify-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-gray-500" />
                      <div className="text-center mt-2 text-gray-600">
                        <div>Upload Logo Image</div>
                        <div className="text-xs">(jpeg, bmp, png)</div>
                      </div>
                    </>
                  )}
                  {/* <input
                    type="file"
                    accept="image/*"
                    {...register("logo")}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        setSelectedImage(file);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                    className=" inset-0 opacity-0 cursor-pointer"
                  /> */}
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {/*  Vessels Name*/}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessels Name
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("name", {
                        required: "Ship Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Call Sign */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Call Sign
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("callSign", {
                        required: "Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.callSign && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.callSign.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Companies */}
                <div className="flex items-center">
                  <label className="w-32 text-sm font-medium">Companies</label>

                  <div className="flex-1">
                    <input
                      type="number"
                      {...register("coId", {
                        valueAsNumber: true,
                        required: "CompanyId is required",
                        min: {
                          value: 0,
                          message:
                            "CompanyId must be greater than or equal to 0",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coId && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coId.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*  Country*/}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Country
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("country", {
                        required: "country is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vessel Office No */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessel Office No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("officeNo", {
                        required: " vessel Office No is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.officeNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.officeNo.message}
                      </p>
                    )}
                  </div>
                </div>
                {/*   IMO No*/}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessel IMO No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("imo", {
                        required: "Vessel IMO No is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.imo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.imo.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-center col-span-2 w-full">
                  <label className="w-32 text-sm font-medium">Address</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*Vessel Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Vessel Phone No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("phoneNo", {
                        required: "Vessel Phone is required",
                        pattern: {
                          value: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/, // Regex for +<countryCode>-XXX-XXX-XXXX
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXXX-XXXX",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.phoneNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Captain Name */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Captain
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("captainName", {
                        required: "CaptainName No is required",
                      })}
                      placeholder="CaptainName Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.captainName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.captainName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Captain E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("captainEmail", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.captainEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.captainEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta1 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">Mate1</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mate1Name", {
                        required: "Meta Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate1Name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate1Name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Mate1 E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("mate1Email", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate1Email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate1Email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta2 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">Mate2</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mate2Name", {
                        required: "Meta Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate2Name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate2Name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Mate2 E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("mate12Email", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate2Email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate2Email.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Meta3 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">Mate3</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mate3Name", {
                        required: "Meta Name is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate3Name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate3Name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Mate3 E-mail
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("mate3Email", {
                        required: "Captain Email is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mate3Email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mate3Email.message}
                      </p>
                    )}
                  </div>
                </div>
                {/* Meta1 */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">MMSI</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("mmsi", {
                        required: "MMSI is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.mmsi && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mmsi.message}
                      </p>
                    )}
                  </div>
                </div>

                {/*Vessel Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">YEID</label>
                  <div className="flex-1">
                    <input
                      type="number"
                      {...register("capacity", {
                        valueAsNumber: true,
                        required: "YEID is required",
                        min: {
                          value: 0,
                          message: "YEID must be greater than or equal to 0",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {/* {errors.capacity && (
      <p className="text-red-500 text-sm mt-1">
        {errors.capacity.message}
      </p>
    )} */}
                  </div>
                </div>
                {/* Establishment Year */}

                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Build Year
                  </label>
                  <div className="flex-1">
                    <input
                      type="date"
                      {...register("buildYear", {
                        required: "EstablishmentYear is required",
                      })}
                      placeholder="establishment_yearPlease Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.buildYear && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.buildYear.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-24">
            <button
              onClick={() => navigate("/dashboard/vessel-overview")}
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
    </>
  );
};

export default VesselRegister;
