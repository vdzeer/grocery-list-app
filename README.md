# Grocery List App

---

## Table of Contents

- [Screenshots](#screenshots)
- [Libraries Used](#libraries-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Linting and Formatting](#linting-and-formatting)
- [Testing](#testing)
- [Additional Commands](#additional-commands)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Screenshots

| Splash Screen                      | Home Screen                        | Add Grocery                       |
| ---------------------------------- | ---------------------------------- | --------------------------------- |
| ![Splash](https://github.com/vdzeer/grocery-list-app/blob/master/assets/screenshots/main.PNG) | ![Home](https://github.com/vdzeer/grocery-list-app/blob/master/assets/screenshots/home.PNG) | ![Add](https://github.com/vdzeer/grocery-list-app/blob/master/assets/screenshots/add.PNG) |

---

## Libraries Used

- [React Native](https://reactnative.dev/) – Core framework
- [@gluestack-ui/themed](https://ui.gluestack.io/docs) – UI components
- [React Navigation](https://reactnavigation.org/) – Navigation
- [React Query](https://tanstack.com/query/latest) – Data fetching
- [Yup](https://github.com/jquense/yup) – Schema validation
- [Formik](https://formik.org/) – Form handling
- [React Native Config](https://github.com/luggit/react-native-config) – Environment variables
- [Jest](https://jestjs.io/) + [React Native Testing Library](https://github.com/callstack/react-native-testing-library) – Testing
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – Code formatting

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher as defined in the engines section)
- **Yarn** or **npm**
- **Watchman** (recommended for macOS)
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)

---

## Installation

1. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

2. **iOS Setup:**

   Navigate to the `ios` folder and install pods:

   ```bash
   cd ios
   pod install
   cd ..
   ```

---

## Project Structure

A typical structure for this project might look like:

```
grocery-list-app/
├── ios/                    # iOS native project files
├── android/                # Android native project files
├── src/
│   ├── components/         # Reusable UI components (e.g., SafeArea)
│   ├── hooks/              # Custom React hooks
│   ├── navigation/         # Navigation components
│   ├── screens/            # Screen components representing app pages
│   ├── services/           # Service layer (API clients)
│   ├── types/              # TypeScript types and interfaces
│   ├── utils/              # Utility functions and helpers
│   └── App.tsx             # Main application component
├── .env                    # Environment variables (managed by react-native-config)
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── babel.config.js         # Babel configuration
├── jest.config.js          # Jest configuration for tests
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation (this file)
```

---

## Environment Variables

This project uses [`react-native-config`](https://github.com/luggit/react-native-config) for managing environment variables.

1. **Create a `.env` file** in the root directory:

   ```dotenv
   # .env
   API_URL=https://api.example.com
   ```

2. **Usage in code:**

   ```js
   import Config from 'react-native-config'

   console.log(Config.API_URL)
   ```

3. **Multiple Environments:**

   You can create different files (e.g., `.env.staging`, `.env.production`) and set the `ENVFILE` variable when running the app:

   ```bash
   ENVFILE=.env.staging react-native run-android
   ```

---

## Running the Project

### Android

To run the project on Android:

```bash
npm run android
```

or

```bash
yarn android
```

### iOS

To run the project on iOS:

```bash
npm run ios
```

or

```bash
yarn ios
```

Make sure you have run `pod install` in the `ios` folder beforehand.

### Starting the Metro Bundler

```bash
npm start
```

or

```bash
yarn start
```

---

## Linting and Formatting

This project uses ESLint and Prettier to enforce code quality and style.

### Linting

- **Check for lint errors:**

  ```bash
  npm run lint
  ```

- **Fix lint errors automatically:**

  ```bash
  npm run lint:fix
  ```

### TypeScript Checks

To run TypeScript type checks without emitting files:

```bash
npm run lint:ts
```

---

## Testing

Tests are written using Jest and [@testing-library/react-native](https://github.com/callstack/react-native-testing-library).

- **Run tests:**

  ```bash
  npm test
  ```

  This command uses the Jest configuration defined in `jest.config.js`. Make sure that your Babel configuration (`babel.config.js`) and Jest configuration are set up to transform React Native files properly.

---

## Additional Commands

- **Start Metro Bundler:**

  ```bash
  npm start
  ```

- **Prepare Git hooks with Husky:**

  ```bash
  npm run prepare
  ```

- **Install iOS pods:**

  ```bash
  npm run pod
  ```

---

## Troubleshooting

- **Watchman Recrawl Warning:**
  If you encounter a watchman recrawl warning, run:

  ```bash
  watchman watch-del '~/grocery-list-app'
  watchman watch-project '~/grocery-list-app'
  ```

- **Jest Transformation Issues:**
  If tests fail with syntax errors related to Flow types, ensure your `babel.config.js` uses the `metro-react-native-babel-preset` and your `jest.config.js` has proper `transformIgnorePatterns` settings.

- **Clearing Jest Cache:**
  If configuration changes are not picked up, clear the Jest cache:

  ```bash
  npx jest --clearCache
  ```

- **Metro Bundler Issues:**
  Restart the Metro bundler if you run into issues during development.

---

## License

This project is licensed under the [MIT License](LICENSE).
