module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxSingleQuote: true,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  proseWrap: 'always',
  printWidth: 80,
  tabWidth: 2,
  bracketSameLine: false,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  quoteProps: 'preserve',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  overrides: [
    {
      files: ['**/*.json'],
      options: { useTabs: false, trailingComma: 'none' },
    },
    {
      files: ['**/*.yml', '**/*.yaml'],
      options: { useTabs: false, singleQuote: false },
    },
  ],
};
