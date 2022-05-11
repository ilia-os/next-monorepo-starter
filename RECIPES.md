# Recipes

### Generator use

- Generators functionality is provided by hygen.
  Templates can be found under `/apps/frontend/_templates`
- To use them, call corresponding tasks from `package.json`.
  For example, `yarn add:component` or `yarn add:page`

### Add shared package

- Put package code into `/packages/<package>`
- Your typescript package needs to be at least transpiled before use.
  Another concern is hot-reloading in dev mode.
  Next can handle that by utilizing [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules).
- Import TM and the shared package, add it to `withTM`, and you should be ready to go.

### Usage without docker

- One can easily use the monorepo without docker.
  There are a bunch of tools provided by `workspace-tools` yarn plugin.
  For example, there is a `dev` task at the root `pacakge.json`:
  ```sh
  yarn # install deps
  yarn dev # yarn workspaces foreach -i run dev
  ```
