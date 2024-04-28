import { Task } from '@prisma/client'
import { FastifyInstance, FastifyRequest } from 'fastify'

export async function TaskController(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: async (req) => {
      const response = await req.services.task.find()

      return response
    },
  })

  fastify.route({
    method: 'GET',
    url: '/:id',
    handler: async (req: FastifyRequest<{ Params: { id: string } }>) => {
      const response = await req.services.task.findById(req.params.id)

      return response
    },
  })

  fastify.route({
    method: 'POST',
    url: '',
    handler: async (req: FastifyRequest<{ Body: Task }>) => {
      const response = await req.services.task.create(req.body)

      return response
    },
  })

  fastify.route({
    method: 'PATCH',
    url: '/:id',
    handler: async (
      req: FastifyRequest<{ Params: { id: string }; Body: Task }>,
    ) => {
      const response = await req.services.task.update(req.body, req.params.id)

      return response
    },
  })

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    handler: async (req: FastifyRequest<{ Params: { id: string } }>) => {
      const response = await req.services.task.delete(req.params.id)

      return response
    },
  })
}
