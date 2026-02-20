import type { AboutData } from "@/src/types/about";

export const ABOUT_DATA = [
  {
    "id": 1,
    "imageSrc": "/images/javascript.svg",
    "imageAlt": "JavaScript 로고",
    "title": "JavaScript",
    "description": "프론트엔드 개발에 기본이 되는 JavaScript부터 제 것으로 만들기 위해 노력했습니다. 프론트엔드 개발에 기본이 되는 JavaScript부터 제 것으로 만들기 위해 노력했습니다."
  },
  {
    "id": 2,
    "imageSrc": "/images/typescript.svg",
    "imageAlt": "TypeScript 로고",
    "title": "TypeScript",
    "description": "타입 안정성을 확보하여 더 견고한 코드를 작성하기 위해 TypeScript를 학습하고 적용하였습니다. 타입 안정성을 확보하여 더 견고한 코드를 작성하기 위해 TypeScript를 학습하고 적용하였습니다."
  },
  {
    "id": 3,
    "imageSrc": "/images/react.svg",
    "imageAlt": "React 로고",
    "title": "React",
    "description": "상태 관리와 컴포넌트 재사용성을 고려한 UI를 개발하고자 노력하였습니다. 상태 관리와 컴포넌트 재사용성을 고려한 UI를 개발하고자 노력하였습니다."
  },
  {
    "id": 4,
    "imageSrc": "/images/nextjs.svg",
    "imageAlt": "Next.js 로고",
    "title": "Next.js",
    "description": "리액트와 함께 서버 기능도 구현해보고자 MongoDB를 이용하여 구현해보았습니다. 리액트와 함께 서버 기능도 구현해보고자 MongoDB를 이용하여 구현해보았습니다."
  }
] satisfies readonly AboutData[];

export default ABOUT_DATA;
