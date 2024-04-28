import { User } from '@prisma/client'
import { FastifyInstance, FastifyRequest } from 'fastify'

export async function UserController(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (req) => {
      const response = await req.services.user.find()

      return response
    },
  })

  fastify.route({
    method: 'GET',
    url: '/:id',
    handler: async (req: FastifyRequest<{ Params: { id: string } }>) => {
      const response = await req.services.user.findById(req.params.id)

      return response
    },
  })

  fastify.route({
    method: 'POST',
    url: '',
    handler: async (req: FastifyRequest<{ Body: User }>) => {
      const response = await req.services.user.create(req.body)

      return response
    },
  })

  fastify.route({
    method: 'PATCH',
    url: '/:id',
    handler: async (
      req: FastifyRequest<{ Params: { id: string }; Body: User }>,
    ) => {
      const response = await req.services.user.update(req.body, req.params.id)

      return response
    },
  })

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    handler: async (req: FastifyRequest<{ Params: { id: string } }>) => {
      const response = await req.services.user.delete(req.params.id)

      return response
    },
  })
}
