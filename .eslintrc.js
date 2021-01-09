module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['react', '@typescript-eslint'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        eqeqeq: 'error',
        'no-trailing-spaces': 'error',
        'arrow-spacing': ['error', { before: true, after: true }]
    }
};
