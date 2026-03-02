import { useTypewriterText } from "@/src/hooks/useTypewriterText";

interface TerminalLineProps {
  text: string;
  delay: number;
}

export default function TerminalLine({ text, delay }: TerminalLineProps) {
  const { displayed, started, isTyping } = useTypewriterText({
    text,
    startDelayMs: delay,
    intervalMs: 30,
  });

  if (!started) {
    return null;
  }

  return (
    <div className="font-mono text-sm text-(--color-highlight) opacity-70">
      {displayed}
      {isTyping && <span className="animate-blink">|</span>}
    </div>
  );
}
