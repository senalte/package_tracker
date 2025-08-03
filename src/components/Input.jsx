import { useState, useRef } from "react";
import { useGetDatas } from "../Services/useGetDatas";
const InputSection = () => {
    const inputRef = useRef(null);
    const { packageInfo, isError, isPending, isSuccess, fetchPackageInfo } =
        useGetDatas();

    const handleSearch = () => {
        const trackingCode = inputRef.current.value;
        fetchPackageInfo(trackingCode);
        inputRef.current.value = "";
    };
    return (
        <div
            className="p-4 bg-white rounded-md flex flex-col gap-4 items-center
    text-center px-4 shadow-md"
        >
            <p className="font-bold font-poppins text-gray-700">
                Track your shipment.
            </p>
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    className="p-2 outline-0 bg-gray-100 rounded"
                    placeholder="Enter your tracking code..."
                />
                <button
                    className="mt-3 px-6 py-3 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition"
                    onClick={handleSearch}
                >
                    Track Package
                </button>
            </div>
        </div>
    );
};
export default InputSection;
