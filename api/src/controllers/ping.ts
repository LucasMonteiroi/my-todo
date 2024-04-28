import { FastifyInstance } from 'fastify'

export async function PingController(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async () => {
      return {
        pong: true,
      }
    },
  })
}
