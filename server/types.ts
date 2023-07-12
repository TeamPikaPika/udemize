import { Request, Response, NextFunction } from 'express';

export type Course = {
  getCourse: (req: Request, res: Response, next: NextFunction) => void;
};

export type prosCons = {
  getPros: (req: Request, res: Response, next: NextFunction) => void;
  getCons: (req: Request, res: Response, next: NextFunction) => void;
};
