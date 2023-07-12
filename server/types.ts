import { Request, Response, NextFunction } from 'express';

export type Course = {
  getCourse: (req: Request, res: Response, next: NextFunction) => void;
};

export type GPTController = {
  getSummary: (req: Request, res: Response, next: NextFunction) => void;
  getPros: (req: Request, res: Response, next: NextFunction) => void;
  getCons: (req: Request, res: Response, next: NextFunction) => void;
  getAlternatives: (req: Request, res: Response, next: NextFunction) => void;
};

export type DBController = {
  addData: (req: Request, res: Response, next: NextFunction) => void;
};

export type InitializeData = {
  initialize: (req: Request, res: Response, next: NextFunction) => void;
};
