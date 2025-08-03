import { supabase } from "../assets/supabase";

export async function fetchPackage(trackingCode) {
    const { data: packageData, error } = await supabase
        .from("packages")
        .select("*")
        .eq("tracking_code", trackingCode)
        .single();

    if (error) throw error;
    //console.log(packageData);
    return packageData;
}
