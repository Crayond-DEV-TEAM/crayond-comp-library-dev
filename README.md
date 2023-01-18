# NPM Package Boilerplate

This boilerplate is designed to help you quickly set up a npm package using Vite, which allows you to build and publish your package as a reusable library of components, functions, and other code.


## Tech Stack

 - **Framework:** React
 - **Type Checking:** Typescript
 - **Tooling:** Es-lint, prettier, lint-staged, husky 
 - **Component Documentation:** Storybook
 - **Build Tool:** Vite

## To Run Locally

Clone the project

```bash
  git clone https://gitlab.com/crayond_knowledge_repo/npm-package-boilerplate.git
```

Go to the project directory

```bash
  cd npm-package-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Run the storybook

```bash
  npm run storybook
```

## To Publish the package

```bash
  npm run publish
```

Here we using [np](https://github.com/sindresorhus/np) for publishing npm package. The np package is a command line tool that simplifies the process of publishing npm packages

If it's not works install the np package globally,

```bash
  npm install -g np
```

Make sure you are logged in to the npm registry on your local machine. You can check if you are logged in by running `npm whoami`. If you are not logged in, you can log in by running `npm login`.

## Authors

- [@harikrish07](https://gitlab.com/harikrish07)


## Feedback

If you have any feedback, please reach out to the authors

## Contributing

Contributions are always welcome!