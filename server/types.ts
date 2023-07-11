import { Request, Response, NextFunction } from 'express';

export type Course = {
  getCourse: (req: Request, res: Response, next: NextFunction) => void;
};

export type prosCons = {
  getProsCons: (req: Request, res: Response, next: NextFunction) => void;
};
