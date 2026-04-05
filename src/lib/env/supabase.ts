type SupabaseEnv = {
    supabaseUrl: string;
    supabasePublishableKey: string;
};

function readRequiredEnv(
    value: string | undefined,
    envName: string,
): string {
    if (!value) {
        throw new Error(`${envName} 환경변수가 설정되지 않았습니다.`);
    }

    return value;
}

export function getSupabaseEnv(): SupabaseEnv {
    const supabaseUrl = readRequiredEnv(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        "NEXT_PUBLIC_SUPABASE_URL",
    );

    const supabasePublishableKey = readRequiredEnv(
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
            process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
        "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );

    return {
        supabasePublishableKey,
        supabaseUrl,
    };
}
