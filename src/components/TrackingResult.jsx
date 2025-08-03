import EmptyInfo from "./EmptyInfo";
import { trackingInfo } from "../assets/mockDatas";
import { useGetDatas } from "../Services/useGetDatas";
const TrackingResult = () => {
    const data = trackingInfo.data[0];
    const { packageInfo, isError, isPending, isSuccess, fetchPackageInfo } =
        useGetDatas();
    console.log("result", packageInfo);
    return (
        <div className="bg-white shadow-md rounded-md p-6 max-w-xl mx-auto">
            {trackingInfo ? (
                <>
                    <h2 className="text-xl font-bold mb-4">Tracking Results</h2>
                    <div className="mb-6">
                        <p>
                            <span className="font-semibold">
                                Tracking Code:
                            </span>{" "}
                            {data.tracking_code}
                        </p>
                        <p>
                            <span className="font-semibold">
                                Current Status:
                            </span>
                            <span className="ml-2 text-yellow-600 font-medium">
                                {data.current_status[1]}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold">
                                Estimated Delivery:
                            </span>{" "}
                            Aug 03, 2025, 6:00 PM
                        </p>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-4">
                        <div className="mb-6">
                            <p>
                                🟢
                                <span className="font-semibold">
                                    Picked Up
                                </span>{" "}
                                — Lagos
                            </p>
                            <p className="text-sm text-gray-500">
                                Aug 01, 10:00 AM
                            </p>
                        </div>
                        <div className="mb-6">
                            <p>
                                🟡{" "}
                                <span className="font-semibold">
                                    In Transit
                                </span>{" "}
                                — On the way to Abuja
                            </p>
                            <p className="text-sm text-gray-500">
                                Aug 01, 6:00 PM
                            </p>
                        </div>
                        <div>
                            <p>
                                ⚪{" "}
                                <span className="font-semibold">
                                    Arrived at Abuja Depot
                                </span>{" "}
                                — Pending...
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <EmptyInfo />
            )}
        </div>
    );
};

export default TrackingResult;
