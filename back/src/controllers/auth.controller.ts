import Logger from "../services/loggerService.ts";
import { Request, Response, NextFunction } from "express";

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      Logger.error(e);
    }
  }
}

export default new AuthController();
