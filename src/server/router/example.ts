import { z } from 'zod'
import { createRouter } from 'server/router/context'

export const exampleRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish()
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`
      }
    }
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany()
    }
  })
  .mutation('add', {
    async resolve({ ctx }) {
      return ctx.prisma.example.create({ data: {} })
    }
  })
  .mutation('deleteById', {
    input: z.object({
      id: z.string()
    }),
    async resolve({ input, ctx }) {
      return ctx.prisma.example.delete({ where: { id: input.id } })
    }
  })
  .mutation('deleteLast', {
    async resolve({ ctx }) {
      const last = (await ctx.prisma.example.findMany({ take: -1 }))?.at(0)
      return ctx.prisma.example.delete({ where: { id: last?.id } })
    }
  })
  .mutation('deleteAll', {
    async resolve({ ctx }) {
      return ctx.prisma.example.deleteMany({})
    }
  })
