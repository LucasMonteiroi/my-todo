import { NotFound } from 'http-errors'

export async function notFoundHandler(req, reply) {
  reply.send(new NotFound(`No such endpoint: ${req.url}`)).then(null, (err) => {
    console.error(err)
  })
}
