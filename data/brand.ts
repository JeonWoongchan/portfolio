export const BRAND_DEFAULT_NAME = "Jeon.Woongchan";
export const BRAND_PROMPT = "~/";
export const BRAND_TERMINAL_PREFIX = ">_";
export const BRAND_HERO_FULL_LOGO = `${BRAND_TERMINAL_PREFIX} ${BRAND_PROMPT}`;

export interface BootLine {
    text: string;
    delay: number;
}

export const BOOT_LINES: ReadonlyArray<BootLine> = [
    { text: "$ initializing system...", delay: 0 },
    { text: "$ loading modules...", delay: 1000 },
    { text: "$ compiling portfolio...", delay: 1800 },
    { text: "$ ready.", delay: 2600 },
];

export const CODE_LINES: ReadonlyArray<string> = [
    'import { useEffect, useState } from "react"',
    "",
    "interface DataType {",
    "  id: number",
    "  title: string",
    "}",
    "",
    "const App = () => {",
    "  const [data, setData] = useState<DataType[]>([])",
    "  const [loading, setLoading] = useState(true)",
    "  useEffect(() => {",
    "    void fetchData()",
    "      .then(setData)",
    "      .finally(() => {",
    "        setLoading(false)",
    "      })",
    "  }, [])",
    "",
    "  if (loading) {",
    "    return <main className='app'>Loading...</main>",
    "  }",
    "",
    "  return (",
    "    <main className='app'>",
    "      <Header />",
    "      <Content data={data} />",
    "      <Footer />",
    "    </main>",
    "  )",
    "}",
    "export default App",
    "",
    "async function fetchData(): Promise<DataType[]> {",
    "  const response = await fetch('/api')",
    "",
    "  if (!response.ok) {",
    "    throw new Error('Failed to fetch data')",
    "  }",
    "",
    "  return response.json() as Promise<DataType[]>",
    "}",
];

export const CODE_COLUMNS = [0, 1, 2] as const;
