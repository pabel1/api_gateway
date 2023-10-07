/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGenericErrorMessage } from './error'

// ?generic response
export type IGenericResponse = {
  meta: {
    page?: number
    limit?: number
    total?: number
  }
  data?: any
}

// !generic error response
export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}
