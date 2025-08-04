import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

import { handleTrack } from "./handleTracking";

export const useGetDatas = () => {
    //const queryClient = useQueryClient();

    const {
        data,
        isError,
        isPending,
        isSuccess,
        mutate: fetchPackageInfo
    } = useMutation({
        mutationFn: handleTrack,
        onError: () => {},
        onSuccess: () => {}
    });

    const packageInfo = data?.packageInfo;
    const events = data?.events;

    return {
        packageInfo,
        events,
        isError,
        isPending,
        isSuccess,
        fetchPackageInfo
    };
};
