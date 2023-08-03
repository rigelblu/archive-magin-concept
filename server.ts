// Copyright rigélblu inc. All rights reserved.
import 'module-alias/register';
import express, { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';
import loadEnv from '@/helpers/loadEnv';

loadEnv();
const app = express();

app.use(helmet());
app.use(express.static('build'));

const RATE_LIMIT_PERIOD_IN_MINS = Number(process.env.RATE_LIMIT_PERIOD_IN_MINS) || 15;
const RATE_LIMIT_MAX_CONNECTIONS = Number(process.env.RATE_LIMIT_MAX_CONNECTIONS) || 100;
const limiter = rateLimit({
  windowMs: RATE_LIMIT_PERIOD_IN_MINS * 60 * 1000,
  max: RATE_LIMIT_MAX_CONNECTIONS,
});
app.use(limiter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('server.js: An error occured');
});

const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, HOST, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
