// prettier.config.js (ESM)
export default {
  // === Core formatting width/indent ===
  printWidth: 100, // default 80  ── docs: Print Width
  tabWidth: 2, // default 2   ── docs: Tab Width
  useTabs: false, // default false ── docs: Tabs

  // === Statement & string style ===
  semi: true, // default true ── docs: Semicolons
  singleQuote: false, // default false ── docs: Quotes
  quoteProps: "as-needed", // default "as-needed" ── docs: Quote Props
  jsxSingleQuote: false, // default false ── docs: JSX Quotes
  trailingComma: "all", // default "all" since v3 ── docs: Trailing Commas
  bracketSpacing: true, // default true ── docs: Bracket Spacing
  bracketSameLine: false, // default false ── docs: Bracket Line
  arrowParens: "always", // default "always" ── docs: Arrow Function Parentheses

  // === Objects & wrapping (new in 3.5) ===
  objectWrap: "preserve", // default "preserve" ── controls single-line vs multi-line objects

  // === File segment formatting ===
  rangeStart: 0, // default 0 ── docs: Range
  rangeEnd: Infinity, // default Infinity

  // === Parser & embedded code ===
  // parser: undefined,           // Prettier auto-detects; not recommended to set globally
  // filepath: undefined,         // CLI/API-only; not meaningful in config (intentionally omitted)
  embeddedLanguageFormatting: "auto", // default "auto" ── format code blocks in Markdown/strings

  // === Pragmas ===
  requirePragma: false, // default false ── only format files with @prettier/@format
  insertPragma: false, // default false ── insert @format on save
  checkIgnorePragma: false, // default false ── honor @noprettier/@noformat to skip formatting

  // === Prose / HTML / Vue / EOL ===
  proseWrap: "preserve", // default "preserve" ── wrap Markdown prose?
  htmlWhitespaceSensitivity: "css", // default "css"
  vueIndentScriptAndStyle: false, // default false
  endOfLine: "lf", // default "lf"

  // === Attributes formatting ===
  singleAttributePerLine: false, // default false

  // === Experimental options (opt in as you like) ===
  experimentalTernaries: true, // default false ── try the “curious ternaries” layout
  experimentalOperatorPosition: "end", // default "end" ── wrap operators at line end vs start

  // === Plugins & overrides (optional) ===
  // plugins: [],
  // pluginSearchDirs: [],
  // overrides: [
  //   { files: "*.md", options: { proseWrap: "always" } },
  // ],
};
