# Vite + React + Redux + TypeScript 🚀

This project is a modern web application built with **Vite**, **React**, **Redux Toolkit**, and **TypeScript**. It serves as a boilerplate for building scalable and maintainable React applications.

## 🛠 Tech Stack

- ⚡ **Vite** - Fast frontend build tool
- ⚛ **React** - Declarative UI library
- 🏪 **Redux Toolkit** - State management
- 💡 **TypeScript** - Typed JavaScript
- 🎨 **CSS Modules / Tailwind CSS** - Styling

## 📂 Project Structure

## 🚀 Quick Start

1️⃣ **Clone the repository:**

```sh
git clone https://github.com/anitabaron/SETUP-Vite-React-Redux-TypeScript.git
cd SETUP-Vite-React-Redux-TypeScript
```

2️⃣ **Install dependencies:**

```sh
npm install
```

# or

```sh
yarn install
```

3️⃣ **Run the development server:**

```sh
npm run dev
```

# or

```sh
yarn dev
```

4️⃣ **Build the production version:**

```sh
npm run build
```

5️⃣ **Preview the production build:**

```sh
npm run preview
```

📦 **Available Scripts**

Starts the development server with Vite. Open http://localhost:5173 to view it in the browser.

```sh
npm run dev
```

Builds for production. The output files will be in the dist/ directory.

```sh
npm run build
```

Serves the production build locally.

```sh
npm run preview
```

Runs ESLint to check for potential code issues.

```sh
npm run lint
```

🌍 **Environment Variables**
Create a .env file in the root directory:

VITE_API_URL=https://your-api.com

🎯 **Features**
✅ Lightning-fast development with Vite
✅ React + TypeScript for type safety
✅ State management with Redux Toolkit
✅ React Router for navigation
✅ ESLint & Prettier for clean code
✅ Optimized production build

🛠 **Dependencies**
React (react, react-dom)
Vite (vite)
Redux Toolkit (@reduxjs/toolkit, react-redux)
React Router (react-router-dom)
TypeScript (typescript, @types/react, @types/react-dom)
Linting & Formatting (eslint, prettier)

🔍 **Code Quality & Linting**

This project uses **ESLint** for enforcing best practices with React and TypeScript.  
For better type-aware linting, update your ESLint configuration to enable stricter rules:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

📝 **Contributing**

Fork the repository
Create a new feature branch: git checkout -b feature-name
Commit your changes: git commit -m "Add feature"
Push to your branch: git push origin feature-name
Submit a pull request

📜 **License**

This project is licensed under the MIT License.
