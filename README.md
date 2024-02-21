Vite React Typescript with ESLint Airbnb and Vitest Setup
Install vite react typescript template
Open your terminal and run npm create vite@latest <app-name> -- --template react-ts
Go to your app name directory. Run cd <app-name.
Install dependecies. Run npm install.
Install prettier eslint with airbnb config
Install eslint as dev dependecies. Run npm i -D eslint.
Create eslint configuration. Run npx eslint --init.
Install airbnb eslint config. Run npx install-peerdeps --dev eslint-config-airbnb.
Install airbnb typescript config. Run npm i -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^6.0.0 @typescript-eslint/parser@^6.0.0
Install prettier with eslint config. Run npm i -D prettier eslint-config-prettier eslint-plugin-prettier.
Create new file touch .prettierrc.cjs. Add the code below on the file.
  const config = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
  };
  module.exports = config;
Add prettier, airbnb-typescript and tsconfig.json on eslint config.
  extends: [
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
Add eslintrc.cjs on tsconfig.
  "include": [
    "vite.config.ts",
    ".eslintrc.cjs", 
    "src"
   ],
Install Vitest
Install Vitest as dev dependecies. Run npm i -D vitest.
Create a new file on src directory touch ./src/setupTest.ts.
Add the code below on your vite.config.ts.
  /// <reference types="vitest" />
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
Add "test": "vitest" scripts on package.json.
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest"
  },
Install React Testing Library
Install react testing library. Run npm i -D @testing-library/react @testing-library/jest-dom jsdom
Paste the code below on setupTests.ts.
import '@testing-library/jest-dom'
Remove eslint error on config and test files and React import for React v17+
Add the config below on eslintrc.cjs.
rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.tsx',
          '**/setupTest.ts',
          '**/*.config.ts',
        ],
      },
    ],
  },
