import React from "react";
import { BsFillPenFill } from "react-icons/bs";
const ItemRequestReportDetail = ({ report }) => {
  return (
    <>
      {/* Basic Info */}
      <div className="py-5">
        <h2 className="py-2 border-b font-semibold text-lg">Basic Info.</h2>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Report No.
              </div>
              <div className="text-gray-800">{report.reportNo}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Date
              </div>
              <div className="text-gray-800">{report.date}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Author
              </div>
              <div className="text-gray-800">{report.author}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Vessel
              </div>
              <div className="text-gray-800">{report.vessel}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Quantity
              </div>
              <div className="text-gray-800">{report.quantity}</div>
            </div>
            <div className="flex py-5">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Total Amount
              </div>
              <div className="text-gray-800">{report.total_amount}</div>
            </div>
            <div className="flex">
              <div className="font-semibold min-w-[25%] text-slate-900">
                Person in charge
              </div>
              <div className="text-gray-800">{report.personInCharge}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Item Detail */}
      <div className="mb-8 ">
        <div className="border-b py-5 ">
          <h2 className="font-semibold text-lg text-gray-800">Item Detail</h2>
        </div>
        <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex w-full ">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  No.
                </div>
                <div className="text-gray-800">{1}</div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  HS Code
                </div>
                <div className="text-gray-800">{report.hs_code}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Classification
                </div>
                <div className="text-gray-800">{report.classification}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Name
                </div>
                <div className="text-gray-800">{report.item_name}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Detail
                </div>
                <div className="text-gray-800">{report.item_detail}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Required quantity
                </div>
                <div className="text-gray-800">{report.required_quantity}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Requested quantity
                </div>
                <div className="text-gray-800">{report.requested_quantity}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Supplier (link)
                </div>
                <div className="text-gray-800">{report.supplier_link}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Mandatory requirements
                </div>
                <div className="text-gray-800">{report.mandatory_requirements}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Reason
                </div>
                <div className="text-gray-800">{report.reason}</div>
              </div>
            </div>
            <div className="flex w-full pt-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                 Amount
                </div>
                <div className="text-gray-800">{report.amount}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Total Amount
                </div>
                <div className="text-gray-800">{report.total_amount}</div>
              </div>
            </div>
          </div>
          
        </div>
        {/* Sign Necessity */}
        <div className="py-5 border-b">
            <div className="mx-10">
              <div className="flex">
                <h2 className="text-md font-medium text-gray-800 min-w-[25%]">Sign</h2>
                <div className="flex gap-3 items-center">
                  <span className="bg-gray-300 px-2 rounded-full inline-flex items-center justify-center">Necessity</span>
                  <span className="text-gray-500 text-base">Approved Person</span>
                  <BsFillPenFill className="text-gray-500 "/>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex w-full ">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  No.
                </div>
                <div className="text-gray-800">{1}</div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  HS Code
                </div>
                <div className="text-gray-800">{report.hs_code}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Classification
                </div>
                <div className="text-gray-800">{report.classification}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Name
                </div>
                <div className="text-gray-800">{report.item_name}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Detail
                </div>
                <div className="text-gray-800">{report.item_detail}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Required quantity
                </div>
                <div className="text-gray-800">{report.required_quantity}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Requested quantity
                </div>
                <div className="text-gray-800">{report.requested_quantity}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Supplier (link)
                </div>
                <div className="text-gray-800">{report.supplier_link}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Mandatory requirements
                </div>
                <div className="text-gray-800">{report.mandatory_requirements}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Reason
                </div>
                <div className="text-gray-800">{report.reason}</div>
              </div>
            </div>
            <div className="flex w-full pt-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                 Amount
                </div>
                <div className="text-gray-800">{report.amount}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Total Amount
                </div>
                <div className="text-gray-800">{report.total_amount}</div>
              </div>
            </div>
          </div>
          </div>
          {/* Sign Completion */}
        <div className="py-5 border-b">
            <div className="mx-10">
              <div className="flex">
                <h2 className="text-md font-medium text-gray-800 min-w-[25%]">Sign</h2>
                <div className="flex gap-3 items-baseline">
                  <div >
                  <span className="bg-blue-100 text-blue-500 px-2 rounded-full inline-flex items-center justify-center">Completion</span>
                  <p className="px-3 pt-2">text</p>
                  </div>
                  
                  <span className="text-gray-500 text-base">Approved Person (2025.02.18)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-3 py-5 border-b ">
          <div className="mx-10">
            <div className="flex w-full ">
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  No.
                </div>
                <div className="text-gray-800">{1}</div>
              </div>
              <div className="flex  w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  HS Code
                </div>
                <div className="text-gray-800">{report.hs_code}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Classification
                </div>
                <div className="text-gray-800">{report.classification}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Name
                </div>
                <div className="text-gray-800">{report.item_name}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Item Detail
                </div>
                <div className="text-gray-800">{report.item_detail}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Required quantity
                </div>
                <div className="text-gray-800">{report.required_quantity}</div>
              </div>
            </div>
            <div className="flex w-full py-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Requested quantity
                </div>
                <div className="text-gray-800">{report.requested_quantity}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Supplier (link)
                </div>
                <div className="text-gray-800">{report.supplier_link}</div>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Mandatory requirements
                </div>
                <div className="text-gray-800">{report.mandatory_requirements}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Reason
                </div>
                <div className="text-gray-800">{report.reason}</div>
              </div>
            </div>
            <div className="flex w-full pt-5">
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                 Amount
                </div>
                <div className="text-gray-800">{report.amount}</div>
              </div>
              <div className="flex w-1/2">
                <div className="font-semibold min-w-[50%] text-slate-900">
                  Total Amount
                </div>
                <div className="text-gray-800">{report.total_amount}</div>
              </div>
            </div>
          </div>
          </div>
          {/* Sign Refusal */}
        <div className="py-5 border-b">
            <div className="mx-10">
              <div className="flex">
                <h2 className="text-md font-medium text-gray-800 min-w-[25%]">Sign</h2>
                <div className="flex gap-3 items-baseline">
                  <div >
                  <span className="bg-red-100 text-red-500 px-2  rounded-full inline-flex items-center justify-center">
                    Refusal
                  </span>
                  <p className="px-3 pt-2">text</p>
                  </div>
                  
                  <span className="text-gray-500 text-base">Approved Person (2025.02.18 Sign Refusal)
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default ItemRequestReportDetail;
