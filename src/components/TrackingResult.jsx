import EmptyInfo from "./EmptyInfo";
import Loader from "./Loader";
import { usePackage } from "../Contexts/packageContext";
import { dateFormater } from "../Services/dateFormat";
const TrackingResult = () => {
    const { isPending, packageInfo, events } = usePackage();

    if (isPending) {
        return <Loader />;
    }
    return (
        <div className="bg-white shadow-md rounded-md w-full md:w-auto p-6 max-w-xl mx-auto">
            {!isPending && !packageInfo?.id ? (
                <EmptyInfo />
            ) : (
                <>
                    <h2 className="text-xl font-bold mb-4">Tracking Results</h2>
                    <div className="mb-6">
                        <p>
                            <span className="font-semibold">
                                Tracking Code:
                            </span>{" "}
                            {packageInfo?.tracking_code}
                        </p>
                        <p>
                            <span className="font-semibold">
                                Current Status:
                            </span>
                            <span className="ml-2 text-yellow-600 font-medium">
                                {packageInfo?.current_status}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold">
                                Shipping from:
                            </span>{" "}
                            {packageInfo?.origin}
                        </p>
                        <p>
                            <span className="font-semibold">Created on:</span>
                            {""} {dateFormater(packageInfo?.created_at)}
                        </p>
                        <p>
                            <span className="font-semibold">Shipping to:</span>{" "}
                            {packageInfo?.destination}
                        </p>
                        <p>
                            <span className="font-semibold">
                                Delivery date:
                            </span>{" "}
                            {dateFormater(packageInfo?.estimated_delivery)}
                        </p>
                    </div>
                    <div className="border-l-2 border-gray-200 pl-4">
                        {events.map(event => (
                            <div className="mb-6">
                                <p>
                                    <span>{event.icon}</span>
                                    <span className="font-semibold">
                                        {event.status}
                                    </span>{" "}
                                    — {event.location}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {dateFormater(event.datetime)}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TrackingResult;
