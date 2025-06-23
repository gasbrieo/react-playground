# React Playground

A structured React + Vite application for experimenting with modern frontend libraries and production-grade patterns.

## 🧱 Tech Stack

- **React** + **TypeScript**
- **Vite** – fast bundler and dev server
- **TanStack Router** – file-based routing via `src/routes`
- **TanStack Form** – composable schema-based forms
- **TanStack Query** – async data fetching and caching
- **TanStack Table** – headless table logic
- **Zustand** – minimal state management
- **Zod** – runtime schema validation
- **shadcn/ui** – Radix-based UI components + TailwindCSS
- **Axios** – HTTP client with interceptors
- **MSW** – API mocking for local dev and tests
- **Vitest** – test runner (unit and UI)
- **Testing Library** – testing components behavior
- **ESLint + Prettier** – strict code quality enforcement

## 📁 Project Structure

```
src/
│
├── components/
│   ├── ui/           # Reusable UI elements (e.g. Button, Table)
│   ├── layout/       # Layout wrappers (e.g. Sidebar, Header)
│   ├── errors/       # Error boundaries, fallback UIs
│   └── seo/          # SEO configuration components
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
│   └── users/
│       ├── components/
│       ├── hooks/
│       └── pages/
│
├── hooks/            # App-level generic hooks (e.g. useIsMobile)
├── lib/              # Shared libs (e.g. react-query setup, cn())
├── routes/           # TanStack file-based router entries
├── testing/          # MSW handlers, test wrappers, mocks
├── types/            # Global types/interfaces
└── utils/            # Generic utility functions
```

> Pages live inside each feature (`features/<feature>/pages`). There is no global `pages/` directory.

## 📐 Naming Conventions

> Currently not enforced by ESLint

| Context                 | Convention | Example                       |
| ----------------------- | ---------- | ----------------------------- |
| React components (.tsx) | PascalCase | `UserCard.tsx`                |
| Hooks / Utils (.ts)     | camelCase  | `useSession.ts`, `slugify.ts` |
| Assets / Others         | kebab-case | `main-menu.scss`, `logo.svg`  |

## 🧪 Testing

- **Vitest** for test execution
- **@testing-library/react** for user interaction tests
- **MSW** for intercepting network requests in tests and local dev
- Co-located test files (e.g. `Component.test.tsx`)
- Testing helpers live under `src/testing/`

### Test Commands

```bash
npm test             # run all tests
npm run test:coverage    # run tests with coverage
npm run test:ui          # run UI test dashboard (with coverage)
```

## 🔧 ESLint Setup

Using **Flat Config** (`eslint.config.js`) with strict community-aligned rules.

### Installed ESLint dependencies:

- `eslint`
- `eslint-config-prettier`
- `eslint-import-resolver-typescript`
- `eslint-plugin-import`
- `eslint-plugin-jest-dom`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `eslint-plugin-sonarjs`
- `eslint-plugin-tailwindcss`
- `eslint-plugin-testing-library`

### Lint Scripts

```bash
npm run lint       # check all files
npm run lint:fix   # auto-fix issues
```

## 📚 References

Inspired by:

- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [shadcn/ui](https://ui.shadcn.com/)
- [TanStack libraries](https://tanstack.com/)

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
