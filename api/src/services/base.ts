import { FastifyInstance, FastifyRequest } from 'fastify'

export default class BaseService {
  protected readonly fastify: FastifyInstance
  protected readonly req: FastifyRequest

  constructor(fastify: FastifyInstance, req: FastifyRequest) {
    this.fastify = fastify
    this.req = req
  }
}
