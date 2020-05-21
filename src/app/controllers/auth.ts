import { Request, Response } from 'express';
import { v4 as uudid } from 'uuid';
import { generateToken } from '../services/auth';
import logger from '../services/logger';

// eslint-disable-next-line import/prefer-default-export
export const handleLoginRequest = (req: Request, res: Response): Response => {
  try {
    if (!req.body) return res.status(400).json({ errro: 'Invalid Request' });
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'username or password missing' });

    // Todo: Do stuff with username and password...
    const payload = {
      id: uudid(),
      username,
    };
    const token = generateToken(payload);
    return res.status(200).cookie('token',token).json({ status: 'success', token });
  } catch (err) {
    logger.error(err);
  }
  return res.status(500).json({ error: 'Something went wrong' });
};
