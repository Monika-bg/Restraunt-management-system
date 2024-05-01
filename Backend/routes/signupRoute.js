import express from "express";
import { signupUser } from "../controller/signupController.js"; // Correct import path

const signupRouter = express.Router();

signupRouter.post("/", signupUser);

export { signupRouter }; // Ensure that signupRouter is exported properly
