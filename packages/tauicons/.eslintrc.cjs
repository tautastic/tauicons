/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/consistent-type-exports": "warn",
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        interfaces: {
          order: "alphabetically",
        },
        typeLiterals: {
          order: "alphabetically",
        },
      },
    ],
  },
};

module.exports = config;
