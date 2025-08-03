import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yqxjcvgfadvzydhzzdox.supabase.co";

const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxeGpjdmdmYWR2enlkaHp6ZG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMzQyMDAsImV4cCI6MjA2OTcxMDIwMH0.QUG8wIb_L-5ECrmAlibOdxoi4MjGzCtff_VDNojsJ0E";
export const supabase = createClient(supabaseUrl, supabaseKey);
