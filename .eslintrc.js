// @ts-check

// @ts-ignore
// require(`@saeris/eslint-config/patch`);

// /**
//  * @type {import("eslint").Linter.Config}
//  */
module.exports = {
  root: true,
  extends: [
    // require.resolve(`@saeris/eslint-config/base`),
    // require.resolve(`@saeris/eslint-config/jest`),
    // require.resolve(`@saeris/eslint-config/typescript`),
    // require.resolve(`@saeris/eslint-config/type-aware`)
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 7,
},
"parser": "@babel/eslint-parser",
  rules: {
    "import/no-named-as-default": `off`,
    "import/no-cycle": `off`,
    "import/no-unused-modules": `off`,
    "import/no-deprecated": `off`,
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }]
  },
  ignorePatterns: [`*.js`]
};
