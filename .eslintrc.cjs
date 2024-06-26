module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react-hooks",
    "react",
    "import",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal", "parent", "sibling"],
            pathGroups: [
              {
                pattern: "@config/**",
                group: "internal",
                position: "before",
              },
              {
                pattern: "{@app, @pages, @widgets,@entities}/**",
                group: "internal",
              },
              {
                pattern: "{@shared}/**",
                group: "parent",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["builtin"],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-key": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-boolean-value": "error",
        "react/no-array-index-key": "error",
        "react/no-deprecated": "error",
        "react/no-unsafe": "error",
        "react/jsx-filename-extension": [
          "error",
          {
            extensions: [".tsx"],
          },
        ],
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            noSortAlphabetically: true,
            reservedFirst: ["key"],
          },
        ],
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: true,
            prefer: "no-type-imports",
          },
        ],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { ignoreRestSiblings: true },
        ],
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/brace-style": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false },
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: ["typeLike"],
            format: ["PascalCase"],
          },
          {
            selector: ["variableLike", "property"],
            format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: ["enum", "enumMember"],
            format: ["PascalCase"],
          },
        ],
        "no-async-promise-executor": "error",
        "no-debugger": "error",
        "no-cond-assign": "error",
        "no-invalid-regexp": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        curly: "error",
        eqeqeq: "error",
        "no-var": "error",
        "no-implicit-coercion": "error",
        "prefer-const": "error",
        "prefer-arrow-callback": "error",
        "constructor-super": "error",
        "prefer-destructuring": ["error", { object: true, array: false }],
        "no-delete-var": "error",
        "no-shadow-restricted-names": "error",
        quotes: ["error", "double"],
        "no-unused-vars": "off",
        "eol-last": ["error", "always"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "max-len": "off",
      },
    },
  ],
};
