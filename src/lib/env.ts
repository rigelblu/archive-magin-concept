// Copyright rigélblu inc. All rights reserved.

// REFACTOR: move this into loadEnv
export default function getEnv(): string {
  const env = process.env.NODE_ENV ? String(process.env.NODE_ENV) : '';
  if (!process.env.NODE_ENV) console.error('Error: NODE_ENV not defined');

  return env;
}
