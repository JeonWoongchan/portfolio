import type { AboutData, AboutProfileTextData } from "@/src/types/about";
import { Code2, Palette, UsersRound, Zap } from "lucide-react";

export const ABOUT_DATA = [
    {
        id: 1,
        icon: Zap,
        title: "Performance",
        description:
            "사용자가 기다리지 않는 서비스를 만들고자 합니다. 페이지 초기 로딩을 5초에서 1초 미만으로, 3D 렌더링 로딩을 30초에서 1.5초로 단축하며 성능 최적화의 실질적인 효과를 경험했습니다.",
    },
    {
        id: 2,
        icon: Palette,
        title: "UI/UX Focus",
        description:
            "코딩을 넘어 사용자 경험을 고민하는 개발자를 지향합니다. 스켈레톤 UI 적용과 디자인 토큰 기반 시스템 구축으로 사용자가 더 편하게 느끼는 인터페이스를 만들어왔습니다.",
    },
    {
        id: 3,
        icon: Code2,
        title: "Clean Architecture",
        description:
            "다음 개발자가 읽기 좋은 코드와 구조를 지향합니다. 모노레포 도입으로 공통 컴포넌트를 통합 관리하고, 신규 개발 기간을 약 2주 단축하는 성과로 이어졌습니다.",
    },
    {
        id: 4,
        icon: UsersRound,
        title: "Collaboration",
        description:
            "좋은 서비스는 좋은 협업에서 나온다고 믿습니다. 코드 리뷰, API 명세 관리, 개발 히스토리 문서화를 주도하며 팀 전체의 생산성과 유지보수 효율을 높여왔습니다.",
    },
] satisfies readonly AboutData[];

export const ABOUT_PROFILE_TEXT_DATA = {
    name: "전웅찬",
    role: "Frontend Developer",
    metaItems: [
        {
            id: 1,
            key: "email",
            text: "jchan71589@gmail.com",
        },
        {
            id: 2,
            key: "position",
            text: "Frontend Developer",
        },
        {
            id: 3,
            key: "education",
            text: "컴퓨터소프트웨어 전공",
        },
        {
            id: 4,
            key: "tags",
            text: "#클린코드 #문서화 #성장",
        },
    ],
} as const satisfies AboutProfileTextData;

export default ABOUT_DATA;
