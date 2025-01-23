import express from "express";
import { getUsers, Register, Login, Logout, deleteUsers, updateUsers } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.delete('/users/:id', verifyToken, deleteUsers);
router.patch('/users/:id', verifyToken, updateUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;