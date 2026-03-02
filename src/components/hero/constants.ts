import { BRAND_HERO_FULL_LOGO } from "@/data/brand.constants";

export interface BootLine {
  text: string;
  delay: number;
}

export const BOOT_LINES: ReadonlyArray<BootLine> = [
  { text: "$ initializing system...", delay: 0 },
  { text: "$ loading modules...", delay: 600 },
  { text: "$ compiling portfolio...", delay: 1200 },
  { text: "$ ready.", delay: 1800 },
];

export const HERO_FULL_LOGO = BRAND_HERO_FULL_LOGO;

export const CODE_LINES: ReadonlyArray<string> = [
  'import React from "react"',
  "const App = () => {",
  "  const [state, setState] = useState()",
  "  useEffect(() => {",
  "    fetchData().then(res => {",
  "      setState(res.data)",
  "    })",
  "  }, [])",
  "  return (",
  "    <main class='app'>",
  "      <Header />",
  "      <Content data={state} />",
  "      <Footer />",
  "    </main>",
  "  )",
  "}",
  "export default App",
  "",
  "async function fetchData() {",
  "  const response = await fetch('/api')",
  "  return response.json()",
  "}",
  "",
  "interface Props {",
  "  data: DataType[]",
  "  loading: boolean",
  "}",
];

export const CODE_COLUMNS = [0, 1, 2] as const;
