import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import { reservationRouter } from './routes/reservationRoute.js';
import { loginRouter } from './routes/loginRoute.js';
import { signupRouter } from './routes/signupRoute.js';
import paymentRouter from './routes/paymentRoutes.js';
import passwordResetRouter from './routes/passwordResetRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/signup", signupRouter);
app.use("/api", paymentRouter);
app.use("/api/v1/reset-password", passwordResetRouter);

dbConnection();

app.use(errorMiddleware); 

export default app;
