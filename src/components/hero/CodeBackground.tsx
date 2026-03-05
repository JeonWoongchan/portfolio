import { CODE_COLUMNS, CODE_LINES } from "@/data/brand";

export default function CodeBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden font-mono text-xs leading-6 text-(--color-highlight) opacity-15"
      aria-hidden="true"
    >
      <div className="flex gap-16">
        {CODE_COLUMNS.map((col) => (
          <div
            key={col}
            className="flex-1"
            style={{
              animation: `codeScroll ${20 + col * 5}s linear infinite`,
            }}
          >
            {[...CODE_LINES, ...CODE_LINES].map((line, i) => (
              <div key={`${col}-${i}`} className="whitespace-pre">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
