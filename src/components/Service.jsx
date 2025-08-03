import { FaCircleCheck } from "react-icons/fa6";

const Service = ({ serviceInfo }) => {
    return (
        <div className=" bg-white p-4 rounded-md shadow-md">
            <div>
                <img src={serviceInfo.img} />
                <p className="text-gray-500 uppercase text-sm pt-4">
                    {serviceInfo.subtitle}
                </p>
            </div>
            <div className="py-4">
                <h1 className="text-2xl font-bold">{serviceInfo.title}</h1>
                <p>{serviceInfo.description}</p>
                <ul className="pt-2">
                    {serviceInfo.services.map((service, ind) => (
                        <li key={ind} className="flex gap-3 items-center py-1">
                            <span className="bg-green-100 p-1 rounded-full">
                                <FaCircleCheck
                                    className="
                                text-green-600"
                                />
                            </span>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Service;
