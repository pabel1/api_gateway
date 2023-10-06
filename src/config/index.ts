import dotenv from 'dotenv';

import path from 'path';
import { z } from 'zod';
dotenv.config({ path: path.join(process.cwd(), '.env') })


const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z
      .string()
      .default('3030')
      .refine((val) => Number(val)),
  // JWT_SECRET: z.string(),
  REDIS_URL: z.string(),
  AUTH_SERVICE_URL: z.string(),
  CORE_SERVICE_URL: z.string(),
  // CLOUDINARY_CLOUD_NAME: z.string(),
  // CLOUDINARY_API_KEY: z.string(),
  // CLOUDINARY_API_SECRET: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  port: envVars.PORT,
  // Database_URL: envVars.DB_URL,
  // defaultPass: envVars.DEFAULT_PASS,
  env: envVars.NODE_ENV,
  redis: {
    url: envVars.REDIS_URL
},
authServiceUrl: envVars.AUTH_SERVICE_URL,
coreServiceUrl: envVars.CORE_SERVICE_URL,
}
