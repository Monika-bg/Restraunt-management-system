
// passwordResetRoute.js

import express from 'express';
import { forgotPassword } from '../controller/passwordResetController.js'; // Adjust the path as per your project structure

const router = express.Router();

router.post('/send', forgotPassword);

export default router;
