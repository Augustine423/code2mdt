import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Camera, Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import companyImage from "../../../../../assets/informationdata/sajo logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCompany,
  fetchCompanyById,
  fetchCompanies,
} from "../../../../../stores/informationData/companySlice.js";

const CompanyEditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the company ID from the URL

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [company, setUpdatedCompany] = useState(null); // State to hold updated company data

  const currentCompany = useSelector((state) => state.companies.currentCompany); // Access the current company data

 

  // Fetch the company data when the component mounts
  useEffect(() => {
    if (id) {
      dispatch(fetchCompanyById(id)); // Fetch the company data by ID
    }
  }, [id, dispatch]);

  // Pre-fill the form with the current company data
  useEffect(() => {
    if (currentCompany) {
      reset(currentCompany); // Reset the form with the fetched company data
    }
  }, [currentCompany, reset]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const updatedCompany = await dispatch(
        updateCompany({ id, companyData: data })
      ).unwrap();
      setUpdatedCompany(updatedCompany); // Update state with the latest data
      dispatch(fetchCompanies({ page: 0, size: 10 })); // Refresh the list of companies
      navigate("/dashboard/company-overview");
    } catch (error) {
      console.error("Error while updating company:", error);
    }
  };

  // If currentCompany is not yet available, show loading or error message
  if (!currentCompany) {
    return <div>Loading...</div>; // Or a more customized loading/error UI
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-md px-6 mx-6 md:p-8 h-full xl:mb-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Upload */}
            <div className="col-span-1 h-36 mt-10 md:mt-20">
              <div className="w-64 relative">
                {/* <div className="bg-gray-300 rounded-md h-36 flex flex-col items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-500" />
                  <div className="text-center mt-2 text-gray-600">
                    <div>Upload Logo Image</div>
                    <div className="text-xs">(jpeg, bmp, png)</div>
                  </div>
                  <input
                    type="file"
                    {...register("coLogo")}
                    className="absolute opacity-0 w-full h-[150px] cursor-pointer"
                  />
                </div> */}
                  <div className="w-[280px] h-[150px] bg-gray-100 rounded-md flex items-center justify-center">
              <img
                // src={currentCompany.coLogo}
                src={companyImage}
                alt={currentCompany.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {/* Companies Name */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Companies Name
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("name", {
                        required: "Company Name is required",
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

                {/* Business No */}
                {/* <div className="flex items-start">
                  <label className="w-40 text-sm font-medium mt-2">
                    Business No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("businessNo", {
                        required: "Business number is required",
                      })}
                      placeholder="Please Enter"
                      className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.businessNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.businessNo.message}
                      </p>
                    )}
                  </div>
                  <input
                    type="button"
                    className="ml-2 bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm flex items-center"
                  >
                    <Upload className="w-4 h-4 mr-1" />
                    File
                  </input> 
                </div> */}
                <div className="flex items-center col-span-1 w-full">
                  <label className="w-24 text-sm font-medium mb-2">
                  Business No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("businessNo", {
                        required: "businessNo is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.businessNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.businessNo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Country */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Country
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("country", {
                        required: "Country is required",
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

                {/* Homepage */}
                <div className="flex items-center col-span-1 w-full">
                  <label className="w-24 text-sm font-medium mb-2">
                    Homepage
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("homePage", {
                        required: "HomePage is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.homePage && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.homePage.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Establishment Year */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Establishment Year
                  </label>
                  <div className="flex-1">
                    <input
                      type="date"
                      {...register("establishmentYear", {
                        required: "Establishment Year is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.establishmentYear && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.establishmentYear.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Employees */}
                <div className="flex items-center col-span-1 w-full">
                  <label className="w-24 text-sm font-medium mt-2">
                    Employees
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("employees", {
                        required: "Employees is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.employees && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.employees.message}
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

                {/* Company Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Phone No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("phoneNo", {
                        required: "Company Phone is required",
                        pattern: {
                          value: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/,
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXX-XXXX",
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

                {/* FAX No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    FAX No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("faxNo", {
                        required: "FAX number is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.faxNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.faxNo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Representative */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    Representative
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("representative", {
                        required: "CeoName is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.representative && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.representative.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* CEO Phone No */}
                <div className="flex items-start">
                  <label className="w-32 text-sm font-medium mt-2">
                    CEO Phone No
                  </label>
                  <div className="flex-1">
                    <input
                      type="text"
                      {...register("coUserPhone", {
                        required: "CEO Phone is required",
                        pattern: {
                          value: /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/,
                          message:
                            "Phone number must follow the format: +<countryCode>-XXX-XXX-XXXX",
                        },
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coUserPhone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coUserPhone.message}
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
                      {...register("coUserEmail", {
                        required: "UserEmail is required",
                      })}
                      placeholder="Please Enter"
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    {errors.coUserEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.coUserEmail.message}
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
              onClick={() => navigate("/dashboard/company-overview")}
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-300 rounded-md text-primary hover:bg-primary hover:text-white"
            >
              Update Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompanyEditForm;
