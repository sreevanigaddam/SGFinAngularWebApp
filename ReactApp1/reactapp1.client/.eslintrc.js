// This file allows you to configure ESLint according to your project's needs, so that you
// can control the strictness of the linter, the plugins to use, and more.

// For more information about configuring ESLint, visit https://eslint.org/docs/user-guide/configuring/

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true, // Specify the Node.js environment
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'no-undef': 'off',
    },
    globals: {
        module: 'readonly', // Define 'module' as a global variable
    },
};
