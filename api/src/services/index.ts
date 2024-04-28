import { FastifyInstance, FastifyRequest } from 'fastify'
import UserService from './user'
import TaskService from './task'

export default function services(
  fastify: FastifyInstance,
  req: FastifyRequest,
) {
  return {
    user: new UserService(fastify, req),
    task: new TaskService(fastify, req),
  }
}
