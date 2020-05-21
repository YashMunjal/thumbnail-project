import * as jwt from 'jsonwebtoken';

// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express';
import logger from './logger';

interface Payload{
  id: string;
  username: string;
}

export const validateRequestAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.authorization) return res.status(400).json({ error: 'Token Missing' });
  return next();
};

export const generateToken = (payload: Payload): string| Error => {
  try {
    const token = jwt.sign(payload, 'averyverystrongtokenkey');
    return token;
  } catch (err) {
    logger.error(err);
  }
  return new Error('Invalid Token');
};

export const verifyToken = (token: string): boolean => {
  try {
    const verified = jwt.verify(token, 'averyverystrongtokenkey');
    return !!verified;
  } catch (err) {
    logger.error(err);
  }
  return false;
};
