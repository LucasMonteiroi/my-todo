import { FastifyInstance, FastifyRequest } from 'fastify'
import BaseService from './base'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { BadRequest } from 'http-errors'

export default class UserService extends BaseService {
  constructor(fastify: FastifyInstance, req: FastifyRequest) {
    super(fastify, req)
  }

  async find() {
    return await this.fastify.prisma.user.findMany()
  }

  async findById(id: string) {
    return await this.fastify.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async findWhere(where) {
    return await this.fastify.prisma.user.findMany({
      where,
    })
  }

  async create(data: User) {
    const userExists = await this.fastify.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    })

    if (userExists) {
      return new BadRequest(`The user ${data.email} is already exists`)
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    data.password = hashedPassword

    return await this.fastify.prisma.user.create({
      data,
    })
  }

  async update(data: User, id: string) {
    const user = await this.fastify.prisma.user.findUnique({
      where: {
        id,
      },
    })

    if (data.password !== user.password) {
      console.log(`Changing user password from: ${user.password}`)
      const hashedPassword = await bcrypt.hash(data.password, 10)
      console.log(`Changing user password to: ${hashedPassword}`)
      data.password = hashedPassword
    }

    return await this.fastify.prisma.user.update({
      data,
      where: {
        id,
      },
    })
  }

  async delete(id: string) {
    return await this.fastify.prisma.user.delete({
      where: {
        id,
      },
    })
  }
}
