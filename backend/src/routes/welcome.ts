import { Router } from "express";
import { WelcomeController } from "../controllers/welcome.controller";

const router = Router();

router.get("/", WelcomeController);

export default router;
