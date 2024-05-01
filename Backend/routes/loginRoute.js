// Import required modules
import express from "express";
import { loginUser } from "../controller/loginController.js"; // Corrected import path

// Initialize router
const loginRouter = express.Router();

// Define login route
loginRouter.post("/", loginUser);

// Export router
export { loginRouter };
