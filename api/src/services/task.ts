import { FastifyInstance, FastifyRequest } from 'fastify'
import BaseService from './base'
import { Task } from '@prisma/client'

export default class TaskService extends BaseService {
  constructor(fastify: FastifyInstance, req: FastifyRequest) {
    super(fastify, req)
  }

  async find() {
    return await this.fastify.prisma.task.findMany()
  }

  async findByUserId(userId: string) {
    return await this.fastify.prisma.task.findMany({
      where: {
        userId,
      },
    })
  }

  async findById(id: string) {
    return await this.fastify.prisma.task.findUnique({
      where: {
        id,
      },
    })
  }

  async create(data: Task) {
    return await this.fastify.prisma.task.create({
      data,
    })
  }

  async update(data: Task, id: string) {
    return await this.fastify.prisma.task.update({
      data,
      where: {
        id,
      },
    })
  }

  async delete(id: string) {
    return await this.fastify.prisma.task.delete({
      where: {
        id,
      },
    })
  }
}
