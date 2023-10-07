import express from 'express'
import { academicSemesterRoutes } from '../modules/academicSemester/acsRouter'

const router = express.Router()

const allRoutes = [
  {
    path: '/academic-semister',
    route: academicSemesterRoutes,
  },
]

// use all routes dynamically
allRoutes.forEach(route => router.use(route.path, route.route))
export default router
