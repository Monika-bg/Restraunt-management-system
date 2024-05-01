import express from "express";
import { sendReservation } from "../controller/reservation.js";

const reservationRouter = express.Router();

// Define your routes using reservationRouter
reservationRouter.post("/send", sendReservation);

// Export the reservationRouter
export { reservationRouter };