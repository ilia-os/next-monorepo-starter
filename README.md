# [next-monorepo-starter](https://github.com/wget-high/next-monorepo-starter#readme)

It is a monorepo with typescript next application and docker set up.

Both prod & dev environments are supposed to be run in docker.
There are known issues while working with docker-desktop and buildkit runtime
(see [getting started](./GETTING-STARTED.md)).

For usage without docker, see [recipes](./RECIPES.md)

## Dependencies

`node` `yarn` `docker` `docker-compose`

## Quick start

```sh
cp /apps/frontend/.env.example /apps/frontend/.env
```

### Dev

```sh
yarn docker:dev:front
yarn
yarn dev
```

###### Frontend should now be accessible on [port 3000](http://localhost:3000)

### Prod

Build & run production images

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
- i18n-ready
- routes metadata framework
- next-seo setup
- sitemap generation
- embedding svg with svgr
- prettier, eslint, typescript setup

## Known issues

- Locales do not hot-reload

### [Getting started guide](./GETTING-STARTED.md)

###### Feature/Pull Requests are welcome
