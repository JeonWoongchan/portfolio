import "server-only";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getSupabaseEnv } from "@/src/server/supabase/env";

export const createServerSupabaseClient = (
    cookieStore: Awaited<ReturnType<typeof cookies>>
) => {
    const { supabasePublishableKey, supabaseUrl } = getSupabaseEnv();

    return createServerClient(supabaseUrl, supabasePublishableKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookieStore.set(name, value, options)
                    );
                } catch {
                    // Server Component에서 호출된 경우 set은 무시한다.
                }
            },
        },
    });
};
