# Vite React Typescript with ESLint and Vitest Setup

## Install vite react typescript template

1. Open your terminal and run `create vite@latest <app-name> -- --template react-ts`
2. Go to your `app name` directory. Run `cd <app-name`.
3. Install dependecies. Run `npm install`.

## Install eslint with airbnb config

4. Install eslint as dev dependecies. Run `npm i -D eslint`.
5. Create eslint configuration. Run `npx eslint --init`.
6. Install airbnb eslint config. Run `npx install-peerdeps --dev eslint-config-airbnb`.
7. Add airbnb on eslint config.
  > extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ]
8. Install airbnb typescript config. Run `npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^6.0.0 \
            @typescript-eslint/parser@^6.0.0 \
            --save-dev`
9. Add airbnb on eslint config
>  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
10. Add tsconfig.json on eslint config.
> parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
11. Add eslintrc.cjs on tsconfig.
> "include": ["vite.config.ts", ".eslintrc.cjs", "src"],


## Install Prettier
12. Install prettier with eslint config. Run `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`.
13. Create new file `.prettierrc.cjs`. Add the code below on the file.
> const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
}; module.exports = config;
14.Add prettier on eslint config.
>extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
 .
 .
 .
 plugins: ['@typescript-eslint', 'react', 'prettier'],
 
 ## Install Vitest
 15. Install Vitest as dev dependecies. Run `npm i -D vitest`.
 16. Create a new file on src directory `setupTests.ts`.
 17. Paste the code below on your `vite.config.ts`.
 >/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})
18. Add `vitest` scripts on package.json. 

## Install React Testing Library
19. Install react testing library. Run `npm i -D @testing-library/react @testing-library/jest-dom jsdom`
20. Paste the code below on `setupTests.ts`.
>import '@testing-library/jest-dom'
