# 🧭 Copilot Instructions for Vite + React + TypeScript Project
---

## 🛠 Tech Stack

- **Frontend**: React
- **Bundler**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm / yarn / pnpm (choose one)

---

## 🚀 Getting Started

1. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
Start the development server
npm run dev
Build for production
npm run build
Preview the production build
npm run preview
📁 Project Structure

├── public/               # Static assets
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility/helper functions
│   ├── styles/           # Global styles (e.g., tailwind.css)
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind config
├── postcss.config.js     # PostCSS config
├── tsconfig.json         # TypeScript config
├── .eslintrc.cjs         # ESLint config
└── package.json
🎨 Tailwind CSS

Utility-first CSS framework for fast and consistent styling.
Add custom styles in src/styles/ or via tailwind.config.ts.
Always use class-based styling instead of inline styles.
Copilot Tips:

Suggest Tailwind classes by typing layout goals, e.g., flex, grid, text-center, etc.
Use responsive prefixes: sm:, md:, lg:, xl:.
🧼 ESLint

Helps maintain code quality and consistency.
Configured to lint TypeScript and React.
To lint manually:

npm run lint
Copilot Tips:

Prefer named functions and clear variable names.
Avoid any types and use interface or type aliases.
🤖 Copilot Guidelines

Use PascalCase for components and camelCase for variables/functions.
Prefer useState, useEffect, and useRef for state and side-effects.
Organize logic using hooks/ and utils/.
Use semantic HTML and accessible ARIA attributes.
Document non-obvious code with comments or /** ... */.
✅ Testing (Optional)

Add if testing is configured.

Tests are written using Vitest/Jest.
File naming: *.test.tsx or *.spec.tsx.
🧪 Scripts

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .ts,.tsx"
}
🤝 Contributing

Format code with Prettier or ESLint before commits.
Write small, focused PRs with clear commit messages.
Stick to project structure and naming conventions.