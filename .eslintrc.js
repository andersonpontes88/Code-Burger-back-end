module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "standard", "prettier"
    ],
    files:[
        ".eslintrc.{js.cjs}"
    ],
    parserOptions: {
        sourceType: "script"
    },

    plugins: ["prettier"],

    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        camelcase: "off",
        "prettier/prettier": ["error", {
            endOfLine:"auto"
        }]
    }

}
