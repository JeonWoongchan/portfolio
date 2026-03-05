import type { MetadataRoute } from "next";

// 운영/개발 환경 모두에서 재사용할 기본 사이트 URL
const DEFAULT_SITE_URL = "https://portfolio-2026.vercel.app";
// 배포 환경변수가 있으면 우선 사용하고, 없으면 기본값 사용
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
const HOME_CHANGE_FREQUENCY: MetadataRoute.Sitemap[number]["changeFrequency"] =
    "weekly";

export default function sitemap(): MetadataRoute.Sitemap {
    // 현재는 단일 페이지 포트폴리오이므로 루트 경로만 명시
    return [
        {
            url: `${SITE_URL}/`,
            // 빌드 시점 기준 마지막 수정 시각 반영
            lastModified: new Date(),
            changeFrequency: HOME_CHANGE_FREQUENCY,
            priority: 1,
        },
    ];
}
