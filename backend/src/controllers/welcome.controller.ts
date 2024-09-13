import { Request, Response } from "express";
import { welcomeService } from "../services/welcome.service";

export const WelcomeController = (req: Request, res: Response): void => {
  const msg = welcomeService();
  res.json(msg);
};
