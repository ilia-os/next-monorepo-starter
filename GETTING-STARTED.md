# Getting started

1. run `yarn install` to setup yarn
2. create .env from .env.example
3. prepare docker dev environment `yarn docker:dev:prepare`
4. test dev `yarn docker:dev`
5. test prod build `yarn docker:prod:upi`
6. remove `yarn.lock` from `.gitignore` & freeze dependencies
7. search for `TODO`s

8. generate your components, pages, hooks & helpers with hygen
9. add your services into apps/ & extend compose configuration
10. add your shared packages into packages/ (see [recipes](./RECIPES.md))

### Experimental features enabled:

- Next.js standalone mode (= nextjs version lock in package.json)

## Limitations

- We can't bind docker networks at build-time with buildkit:
  While static rendering at build time, next usually requires some backend available.
  While using buildkit, I wasn't able to link the backend in a convenient (and cross-platform) way,
  as it does not support custom network binding at build-time.
  Legacy building engine has this ability, and we can bind to external network.
  By default, frontend builder will bind to empty external network,
  resulting in a build error if using buildkit.

- File-watchers does not seem to work with Docker Desktop installations (at least on linux):
  While running dev mode in docker container (Docker Desktop = Docker in Docker),
  for some reason the app does not get notified about fs changes.
  Solution: fallback to fs polling: https://jameschambers.co.uk/nextjs-hot-reload-docker-development

- Standalone mode does not support pnp yet:
  Next.js seems to struggle with bundling pnp deps in standalone mode.
  There is a related PR: https://github.com/vercel/next.js/pull/34831
  Solution: use node_modules
