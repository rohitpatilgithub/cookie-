import express from 'express';
import { handleUserLogin } from '../controller/login.router.js';

const router = express.Router();

router.post('/login',handleUserLogin);

export default router;