import { supabase } from "../assets/supabase";

export async function fetchTimeline(packageId) {
    const { data: tracking_events, error } = await supabase
        .from("tracking_events")
        .select("*")
        .eq("package_id", packageId);

    if (error) throw error;

    return tracking_events;
}
