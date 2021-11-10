# Next monorepo

It is a lerna monorepo.

## Dependencies
`node` `yarn` `lerna` `docker` `docker-compose`

## Getting started with development

Run monorepo in dev mode:

```sh
lerna bootstrap
yarn run dev
```

######Frontend should now be accessible on [port 3000](http://localhost:3000)

Each individual package can be run using `lerna`

```sh
lerna run dev --stream --scope frontend
```

or using its own `package.json`

```sh
cd packages/frontend
yarn run dev
```

## Deployment && testing production build
The only requirement for prod environment is docker:
```sh
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up 
```
######Frontend should now be accessible on [port 80](http://localhost:80)

###Author: 
Ilia Osipov
