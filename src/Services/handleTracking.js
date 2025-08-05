import { fetchPackage } from "./getData";
import { fetchTimeline } from "./getPackageTimeline";

export async function handleTrack(trackingCode) {
    try {
        const packageInfo = await fetchPackage(trackingCode);
        const events = await fetchTimeline(packageInfo.id);
        return { packageInfo, events };
    } catch (err) {
        console.error("Error fetching tracking info:", err.message);
    }
}
