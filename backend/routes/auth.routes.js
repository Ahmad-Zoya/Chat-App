import express from "express";
import {loginUser, logoutUser, signupUser} from "..//controllers/auth.controller.js"

const router = express.Router();

router.get("/api/auth/signup", signupUser);

router.get("/api/auth/login", loginUser);

router.get("/api/auth/logout", logoutUser);

export default router;