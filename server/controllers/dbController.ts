import { Request, Response, NextFunction } from 'express';
import { DBController } from '../types';
import db, { users, tech } from '../db';

const dbController: DBController = {
  addData: (req, res, next) => {
    
  },
};

export default dbController;
