import fastifyCompress from '@fastify/compress'
import fastifyHelmet from '@fastify/helmet'
import fastify from 'fastify'

import '../../env'
import { routes } from './routes'

import { globalErrorHandler } from './handlers/globalError'
import { notFoundHandler } from './handlers/notFound'
import prismaPlugin from './plugins/prisma'
import { servicesPlugin } from './plugins/services'

const setupServer = async () => {
  const server = fastify({
    logger: true,
  })

  await server.register(fastifyHelmet)
  await server.register(fastifyCompress)

  await server.register(servicesPlugin)
  await server.register(prismaPlugin)

  await server.register(routes)

  server.setErrorHandler(globalErrorHandler)
  server.setNotFoundHandler(notFoundHandler)

  try {
    server
      .listen({
        port: parseInt(process.env.PORT as string) || 3000,
        host: '0.0.0.0',
      })
      .catch(console.error)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }

  return server
}

export default setupServer
