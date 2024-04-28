import { FastifyInstance } from 'fastify'
import { PingController } from '../controllers/ping'
import { UserController } from '../controllers/user'
import { TaskController } from '../controllers/task'

export async function routes(fastify: FastifyInstance) {
  await fastify.register(PingController, { prefix: '/ping' })
  await fastify.register(UserController, { prefix: '/api/v1/user' })
  await fastify.register(TaskController, { prefix: '/api/v1/task' })
}
