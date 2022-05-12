# [next-monorepo-starter](https://github.com/wget-high/next-monorepo-starter#readme)

Production-ready monorepo with typescript next application and nginx set up in docker.

Both prod & dev environments are supposed to be run in docker.
There are known issues while working with docker-desktop and buildkit runtime
(see [getting started](./GETTING-STARTED.md)).

For usage without docker, see [recipes](./RECIPES.md)

## Dependencies

`node` `yarn` `docker` `docker-compose`

## Quick start

```sh
cp ./apps/frontend/.env.example ./apps/frontend/.env
```

### Dev

```sh
yarn install # otherwise cant use package.json scripts
yarn docker:dev:prepare # build & install deps
yarn docker:dev # run dev environment
# check package.json for more
```

###### Frontend should now be accessible on [port 3000](http://localhost:3000)

### Prod

Build & run production images with facade nginx

```sh
yarn docker:prod:build
yarn docker:prod:up
```

###### Frontend should now be accessible on [port 80](http://localhost:3000)

## Features

- yarn workspace monorepo
- production-ready docker setup with nginx proxy
- dev in docker
- generators made with hygen
- i18n-ready with locales HMR
- routes metadata framework
- next-seo setup
- sitemap generation
- embedding svg with svgr
- prettier, eslint, typescript setup

### [Getting started guide](./GETTING-STARTED.md)

###### Feature/Pull Requests are welcome
