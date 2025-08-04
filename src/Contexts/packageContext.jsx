import { createContext, useContext } from "react";
import { useGetDatas } from "../Services/useGetDatas";

const PackageContext = createContext({});
const usePackage = () => useContext(PackageContext);

const PackageProvider = ({ children }) => {
    const {events,
        packageInfo,
        isError,
        isPending,
        isSuccess,
        fetchPackageInfo,
        packageTimeline
    } = useGetDatas();

    return (
        <PackageContext
            value={{events,
                packageInfo,
                fetchPackageInfo,
                isError,
                isPending,
                isSuccess,
                packageTimeline
            }}
        >
            {children}
        </PackageContext>
    );
};

export { PackageProvider, usePackage };
