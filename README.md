# React + TypeScript + Vite

Bitcoin Tracker App Overview

Welcome to the Bitcoin Tracker App! This application is built using TypeScript and React.js to provide users with real-time information about Bitcoin prices, trends, and related data. Whether you're a cryptocurrency enthusiast or just curious about Bitcoin's performance, this app is designed to keep you informed.

Features
Real-time Price Updates: Stay up-to-date with the latest Bitcoin prices.
Currency Converter: Convert Bitcoin prices to various fiat currencies.
User-Friendly Interface: Intuitive design for easy navigation and a seamless user experience.
Getting Started
To run the Bitcoin Tracker App locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/bitcoin-tracker-app.git
Install Dependencies:

bash
Copy code
cd bitcoin-tracker-app
npm install

Technologies Used
React.js: A JavaScript library for building user interfaces.
TypeScript: A superset of JavaScript that adds static typing to the language.
API Integration
The Bitcoin Tracker App relies on the Paybis, Moonpay, Gaurdarian, and Transak API to fetch real-time Bitcoin data.

Thank you for using the Bitcoin Tracker App! If you have any questions or feedback, please don't hesitate to reach out. Happy tracking! 🚀

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
