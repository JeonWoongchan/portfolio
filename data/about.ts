import type { AboutData, AboutProfileTextData } from "@/src/types/about";
import { Code2, Palette, UsersRound, Zap } from "lucide-react";

export const ABOUT_DATA = [
    {
        id: 1,
        icon: Code2,
        title: "Clean Architecture",
        description:
            "코드의 품질과 팀 컨벤션에 맞는 구조적 일관성을 중요시합니다. 프론트엔드 파트의 <b>모노레포</b> 구조와 <b>디자인 시스템</b> 도입을 주도하고, 실제 프로젝트에 적용한 경험이 있습니다.",
    },
    {
        id: 2,
        icon: Palette,
        title: "UX Focus",
        description:
            "단순한 기능 구현을 넘어 <b>사용자가 체감하는 경험</b>을 설계합니다. 사용자 관점에서 정보의 우선순위를 기준으로 렌더링 구조를 고민하고, 상황에 맞는 최선의 로딩 방식과 화면 구성을 선택하고자 노력합니다.",
    },
    {
        id: 3,
        icon: Zap,
        title: "Performance",
        description:
            "서비스 전반에서 성능적으로 개선할 수 있는 지점을 지속적으로 고민합니다. 대용량 3D 모델의 렌더링 방식을 개선하여 <b>초기 로딩 시간을 약 30초에서 5초 미만</b>으로 단축시킨 경험이 있습니다.",
    },
    {
        id: 4,
        icon: UsersRound,
        title: "Collaboration",
        description:
            "좋은 서비스는 좋은 협업에서 나온다고 믿습니다. 단순한 요청 기반 협업이 아니라 더 나은 해결 방안을 함께 고민하는 것을 지향하며 협업 일관성을 위해 <b>코드리뷰</b>, <b>개발 히스토리 문서화</b>를 진행했습니다.",
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
            key: "techStack",
            text: "React · Next.js · TypeScript ",
        },
        {
            id: 3,
            key: "education",
            text: "컴퓨터소프트웨어 전공",
        },
        {
            id: 4,
            key: "tags",
            text: "#문제해결 #협업 #성장",
        },
    ],
} as const satisfies AboutProfileTextData;

export default ABOUT_DATA;
