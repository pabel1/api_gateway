import { NextFunction, Request, Response } from 'express'
import catchAsyncError from '../../../Errorhandler/catchAsync'
import { academicSemesterService } from './acsServices'

const createAcademicSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('controller')
  try {
    const result = await academicSemesterService.insertIntoDB(req)
    // console.log(result)
    // sendResponse(res, result)
  } catch (err) {
    next(err)
  }
}
const academicSemesterCreate = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log('controller')

    // sendResponse<IAcademicSemester>(res, {
    //   statusCode: httpStatus.CREATED,
    //   success: true,
    //   message: 'Academic Semester created Successfull!!',
    //   data: result,
    // })
  }
)

export const academicSemesterController = {
  createAcademicSemester,
  academicSemesterCreate,
}
