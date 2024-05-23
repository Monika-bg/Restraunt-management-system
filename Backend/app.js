import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"; // Import morgan for request logging
import { dbConnection } from "./database/dbConnection.js"; // Import named export
import { errorMiddleware } from "./error/error.js";
import { reservationRouter } from './routes/reservationRoute.js';
import { loginRouter } from './routes/loginRoute.js'; // Import the login route
import { signupRouter } from './routes/signupRoute.js'; // Import the signup route
import paymentRouter from './routes/paymentRoutes.js'; // Import the default export
import passwordResetRouter from './routes/passwordResetRoute.js'; // Import the password reset route

const app = express();
dotenv.config({ path: "./config/config.env" });

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use(morgan("dev")); // Log requests in dev format

// Routes
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/login", loginRouter); // Use the login route
app.use("/api/v1/signup", signupRouter); // Use the signup route
app.use("/api", paymentRouter); // Use the payment route
app.use("/api/v1/reset-password", passwordResetRouter); // Use the password reset route

// Connect to MongoDB
dbConnection();

// Error middleware
app.use(errorMiddleware); 

export default app;
