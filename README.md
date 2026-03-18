# Portfolio 2026

프론트엔드 개발자 포트폴리오 웹사이트입니다.  
섹션 중심의 싱글 페이지 구조로 설계했으며, 렌더링 전략과 서버/클라이언트 컴포넌트 적용 방식을 적용해보기 위해 Next.js를 사용했습니다.

- 배포 URL: https://woongchan.vercel.app/

## 기술 스택

- Framework: Next.js, React
- Language: TypeScript
- Styling: Tailwind CSS
- UI/Utility: Radix UI(shadcn/ui)

## 섹션 구성과 구현 방식

### 1) Hero
![메인(Hero)](./docs/images/hero.png)

- 목적: 첫 인상 전달, 개발자 브랜딩, 인트로 애니메이션
- 구현: `useHeroIntroSequence` 훅으로 단계(phase) 기반 UI 전환 관리
- 관련 코드:
  - `src/components/hero/*`
  - `src/hooks/hero/useHeroIntroSequence.ts`

### 2) About
![소개(About)](./docs/images/about.png)

- 목적: 개발 성향, 협업 방식, 핵심 강점 소개
- 구현: `data/about.ts`의 정적 데이터 기반 카드 렌더링
- 관련 코드:
  - `src/components/about/*`
  - `data/about.ts`

### 3) Skills
![기술 스택(Skills)](./docs/images/skills.png)

- 목적: 카테고리별 기술 스택(Frontend/Library/DevOps/Backend) 전달
- 구현: `data/skills.ts` 데이터 중심 렌더링 + 공통 카드 컴포넌트 재사용
- 관련 코드:
  - `src/components/skills/*`
  - `data/skills.ts`

### 4) Career
![경력(Career)](./docs/images/career.png)

- 목적: 회사/프로젝트 단위 경력과 성과 하이라이트 전달
- 구현: `data/career.ts` 구조화 데이터(`period`, `highlights`, `stack`) 기반 카드 조합
- 관련 코드:
  - `src/components/career/*`
  - `data/career.ts`

### 5) Archive
![아카이브(Archive)](./docs/images/archive.png)

- 목적: 프로젝트/블로그 이력 아카이브
- 구현: 카테고리 필터 + 링크 리스트 UI
- 관련 코드:
  - `src/components/archive/*`
  - `data/archive.ts`

### 6) Footer
![푸터(Footer)](./docs/images/footer.png)

- 목적: 사이트 하단에서 연락 채널, 저작권, 보조 내비게이션 정보를 명확히 제공
- 구현: 푸터 전용 컴포넌트에서 링크 그룹/카피라이트/정책 링크를 일관된 레이아웃으로 구성
- 관련 코드:
    - `src/components/footer/*`
    - `src/components/common/*`

## 디렉터리 구조

```txt
.
├─ src/
│  ├─ app/                  # App Router 엔트리
│  ├─ components/
│  │  ├─ hero/about/skills/career/archive
│  │  └─ common
│  ├─ hooks/                # UI/스크롤/섹션 관련 커스텀 훅
│  ├─ store/                # Zustand 전역 상태
│  ├─ types/                # 타입 정의
│  └─ utils/                # 유틸 함수
├─ data/                    # 섹션 정적 데이터
├─ components/ui/           # 공통 UI 프리미티브
└─ public/                  # 정적 에셋
```


