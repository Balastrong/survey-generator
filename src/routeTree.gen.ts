/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const NewLazyImport = createFileRoute('/new')()
const IdLazyImport = createFileRoute('/$id')()

// Create/Update Routes

const NewLazyRoute = NewLazyImport.update({
  path: '/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/new.lazy').then((d) => d.Route))

const IdLazyRoute = IdLazyImport.update({
  path: '/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/$id.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$id': {
      preLoaderRoute: typeof IdLazyImport
      parentRoute: typeof rootRoute
    }
    '/new': {
      preLoaderRoute: typeof NewLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  IdLazyRoute,
  NewLazyRoute,
])

/* prettier-ignore-end */
