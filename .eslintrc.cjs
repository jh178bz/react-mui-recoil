module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['react', '@typescript-eslint'],
    ignorePatterns: ['.eslintrc.cjs'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {},
        },
    },
    rules: {
        camelcase: 'warn',
        'no-var': 'error',
        'prefer-arrow-callback': 'warn',
        'no-use-before-define': 'off',
        'no-return-await': 'off',
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-body-style': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-parameter-properties': [
            'error',
            {
                allows: ['private readonly', 'public readonly', 'readonly', 'public'],
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-shadow': 'off',
        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],
        'react/prop-types': 'off',
    },
};
