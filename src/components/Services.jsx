import { serviceHighlights } from "../assets/mockDatas";
import Service from "./Service";
const Services = () => {
    return (
        <div>
            <div className="bg-green-700 text-white p-4">
                <h1 className="font-semibold font-poppins text-xl">
                    Navigating Local & International Deliveries
                </h1>
                <p className="text-gray-200 py-2">
                    Shipping doesn’t have to be stressful. Whether you’re
                    sending within your country or across borders, we make sure your
                    packages move smoothly and securely.
                </p>
                <ul
                    className="text-gray-200
                    list-decimal list-inside"
                >
                    <li>Transparent tracking at every step,</li>
                    <li>Reliable delivery times,</li>
                    <li>Support for both individuals and businesses</li>
                </ul>
            </div>
            <div
                className="py-10 bg-gray-100 px-4 flex flex-col gap-4
            justify-center items-center md:flex-row md:justify-between"
            >
                {serviceHighlights.map(data => (
                    <Service serviceInfo={data} key={data.subtitle} />
                ))}
            </div>
        </div>
    );
};

export default Services;
