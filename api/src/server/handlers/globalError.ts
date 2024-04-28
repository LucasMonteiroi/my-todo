import { ValidationResult } from 'fastify'
import { isEmpty, isNil } from 'lodash'

export async function globalErrorHandler(error, request, reply) {
  let statusCode: number
  let data: ValidationResult[] | undefined = []

  if (!isEmpty(error.validation)) {
    statusCode = 400
    data = error.validation
  } else if (!isNil(error.statusCode)) {
    statusCode = error.statusCode
  } else {
    statusCode = 500
  }

  if (statusCode >= 500) {
    request.log.error(error)
  } else if (statusCode >= 400) {
    request.log.info(error)
  } else {
    request.log.error(error)
  }

  reply
    .code(statusCode)
    .send({
      success: false,
      message: error.message || error.name,
      data,
    })
    .then(null, (err) => {
      console.error(err)
    })
}
