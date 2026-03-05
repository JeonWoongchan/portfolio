import { useEffect, useState } from "react";

interface UseTypewriterTextOptions {
  text: string;
  enabled?: boolean;
  startDelayMs?: number;
  intervalMs?: number;
}

export function useTypewriterText({
  text,
  enabled = true,
  startDelayMs = 0,
  intervalMs = 30,
}: UseTypewriterTextOptions) {
  // 타이핑 시작 여부와 현재까지 출력된 문자열을 관리한다.
  const [started, setStarted] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    // 활성화된 경우 지정된 지연 시간 후 타이핑을 시작한다.
    if (!enabled || started) {
      return;
    }

    const timeout = setTimeout(() => setStarted(true), startDelayMs);
    return () => clearTimeout(timeout);
  }, [enabled, started, startDelayMs]);

  useEffect(() => {
    // 시작 이후 interval마다 한 글자씩 문자열을 확장한다.
    if (!enabled || !started) {
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index += 1;
        return;
      }
      clearInterval(interval);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [enabled, started, text, intervalMs]);

  return {
    // 현재 화면에 노출할 문자열
    displayed,
    // 타이핑 시작 여부
    started,
    // 아직 타이핑이 진행 중인지 여부
    isTyping: displayed.length < text.length,
  };
}
