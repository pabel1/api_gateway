import express from 'express'
import { academicSemesterController } from './acsController'

const router = express.Router()

router.post('/create', academicSemesterController.createAcademicSemester)
router.post('/test', academicSemesterController.academicSemesterCreate)

export const academicSemesterRoutes = router
