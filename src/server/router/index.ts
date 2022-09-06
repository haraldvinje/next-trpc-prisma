// src/server/router/index.ts
import superjson from 'superjson'
import { createRouter } from 'server/router/context'

import { exampleRouter } from 'server/router/example'

export const appRouter = createRouter().transformer(superjson).merge('example.', exampleRouter)

// export type definition of API
export type AppRouter = typeof appRouter
