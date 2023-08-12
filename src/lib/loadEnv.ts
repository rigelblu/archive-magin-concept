// Copyright rigélblu inc. All rights reserved.
import fs from 'fs';
import dotenv from 'dotenv';

// OPTIMIZE: externalizing to rb-base-packages
type EnvFileType = 'local' | 'development' | 'production';

export default function loadEnv() {
  const envFile: Record<EnvFileType, string> = {
    local: '.env.local',
    development: '.env.development',
    production: '.env.production',
  };

  const DEFAULT_ENV: EnvFileType = 'local';
  const env = (process.env.ENV as EnvFileType) || DEFAULT_ENV;
  const filePath = envFile[env] || envFile[DEFAULT_ENV];

  try {
    if (fs.existsSync(filePath)) {
      dotenv.config({ path: filePath });
    } else {
      switch (env) {
        case 'production':
        case 'development':
          console.info(`Info: env file ${filePath} not found. Ensure env vars are set on system .`);
          break;
        default:
          console.warn(
            `Warning: env file ${filePath} not found. Ensure env vars are set on system.`
          );
      }
      dotenv.config({ path: envFile[DEFAULT_ENV] });
    }
  } catch (e) {
    console.error('Error while loading environment variables:', e);
  }
}
