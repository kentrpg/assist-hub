module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: "auto",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
        tabWidth: 2,
        printWidth: 80,
        singleQuote: false
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript"
      }
    }
  ]
};
