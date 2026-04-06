import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getSupabaseEnv } from "@/src/server/supabase/env";

export function createSupabaseClient() {
    const { supabasePublishableKey, supabaseUrl } = getSupabaseEnv();

    return createClient(supabaseUrl, supabasePublishableKey);
}
