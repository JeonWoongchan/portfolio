import type { MetadataRoute } from "next";

// robots/sitemap에서 공통으로 사용할 기본 사이트 URL
const DEFAULT_SITE_URL = "https://woongchan.vercel.app/";
// 환경변수가 설정되면 해당 도메인을 우선 사용
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

export default function robots(): MetadataRoute.Robots {
    return {
        // 모든 크롤러가 전체 경로를 색인할 수 있도록 허용
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        // 검색 엔진에 사이트맵 위치 전달
        sitemap: `${SITE_URL}/sitemap.xml`,
        // 대표 호스트 지정
        host: SITE_URL,
    };
}
