import { useEffect, useState } from "react";

interface UseHeroPhaseOptions {
  bootToLogoDelayMs?: number;
  logoToContentDelayMs?: number;
}

export function useHeroPhase({
  bootToLogoDelayMs = 2400,
  logoToContentDelayMs = 3600,
}: UseHeroPhaseOptions = {}) {
  // Hero 진행 단계를 관리한다. (0: boot, 1: logo, 2: content)
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 부팅 텍스트 이후 로고를 노출하는 전환 타이머
    const bootToLogo = setTimeout(() => setPhase(1), bootToLogoDelayMs);
    // 로고 이후 본문 콘텐츠를 노출하는 전환 타이머
    const logoToContent = setTimeout(() => setPhase(2), logoToContentDelayMs);

    return () => {
      // 언마운트 시 타이머를 정리해 중복 실행/메모리 누수를 방지한다.
      clearTimeout(bootToLogo);
      clearTimeout(logoToContent);
    };
  }, [bootToLogoDelayMs, logoToContentDelayMs]);

  return phase;
}
