import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPackage } from "./getData";

export const useGetDatas = () => {
    //const queryClient = useQueryClient();
    const {
        data: packageInfo,
        isError,
        isPending,
        isSuccess,
        mutate: fetchPackageInfo
    } = useMutation({
        mutationFn: fetchPackage,
        onError:()=>{},
        onSuccess: ()=>{}
    });

    return { packageInfo, isError, isPending, isSuccess, fetchPackageInfo };
};
