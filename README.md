# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
// ============= START ==================


# 🚫 YouTube Shorts Blocker Extension

A simple Chrome Extension built using **React** + **TypeScript** that allows users to **hide** and **block** YouTube Shorts from the homepage, sidebar, and search results.

---

## ✨ Features

- ✅ **Hide Shorts**: Remove Shorts sections from the homepage, sidebar, and feed.
- ✅ **Block Shorts**: Prevent opening Shorts videos by clicking or searching.
- ✅ **Toggle Options**: Easy on/off switches inside the extension popup.
- ✅ **Built with React + TypeScript** for modern, maintainable code.

---

## 🛠 Tech Stack

- ⚛️ React
- ⛓️ TypeScript
- 🛡️ Chrome Extensions API
- 🎨 Basic CSS Styling

---

## 📦 Installation (Development Mode)

1. **Clone the repository:**

    ```bash
    git clone 
    cd youtube-shorts-blocker
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Build the project:**

    ```bash
    npm run build
    ```

    > This will create a `dist/` folder with all build files.

4. **Load into Chrome:**

    - Open `chrome://extensions`
    - Turn ON **Developer Mode**.
    - Click **Load Unpacked**.
    - Select the `dist/` folder.

---

## 🚀 Usage

- Click on the Extension icon.
- Enable/disable **Hide Shorts** or **Block Shorts** toggle.
- Browse YouTube normally – no more distractions!

---

## 🧩 Folder Structure

