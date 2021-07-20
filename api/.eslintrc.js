module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:json/recommended', 'plugin:node/recommended'],
  plugins: ['prettier', 'prefer-arrow'],
  env: {
    jest: true,
    es6: true
  },
  parserOptions: { ecmaVersion: 2018 },
  rules: {
    'prettier/prettier': 'error',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'prefer-const': 'error',
    'no-var': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
        allowStandaloneDeclarations: false
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'operator-linebreak': ['warn', 'before'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
};
