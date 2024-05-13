import express from 'express';
import resetPassword from '../controller/passwordResetController.js';

const router = express.Router();

// Route to handle resetting password
router.post('/send', resetPassword);

export default router;
