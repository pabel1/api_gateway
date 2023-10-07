import { Request } from 'express'
import { IGenericResponse } from '../../../interfaces/generic.response'
import { AuthService } from '../../shared/axios'

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  console.log('services')
  const response: IGenericResponse = await AuthService.post(
    '/academic-semister/create-academic-semester',
    req.body
    // {
    //   headers: {
    //     Authorization: req.headers.authorization,
    //   },
    // }
  )
  return response
}

export const academicSemesterService = {
  insertIntoDB,
}
