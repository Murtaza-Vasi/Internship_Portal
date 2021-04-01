import express from 'express';
import {
  register,
  login,
  logout,
  updateProfile,
  getProfile,
} from '../controllers/userController.js';
// import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/get-profile/:id').get(getProfile);
router.route('/update-profile/:id').patch(updateProfile);

export default router;
