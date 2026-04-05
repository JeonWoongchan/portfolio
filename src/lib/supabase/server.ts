// 서버 컴포넌트와 서버 액션에서 쿠키 기반 Supabase 클라이언트를 생성
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseEnv } from "@/src/lib/env/supabase";

export const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
    const { supabasePublishableKey, supabaseUrl } = getSupabaseEnv();

    return createServerClient(
        supabaseUrl,
        supabasePublishableKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        },
    );
};
