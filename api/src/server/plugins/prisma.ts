import fp from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'
import { FastifyPluginAsync } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server) => {
  const prisma = new PrismaClient({
    log: ['error', 'warn'],
  })

  await prisma.$connect()

  server.decorate('prisma', prisma)

  server.addHook('onClose', async (server) => {
    server.log.info('disconnecting Prisma from DB')
    await server.prisma.$disconnect()
  })
})

export default prismaPlugin
