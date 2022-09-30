import express from 'express';
import {
  employeeLogin,
  getEmployeeDetails,
  registerEmployee,
  updateEmployeeProfile,
} from '../controllers/employeeController.js';

const router = express.Router();

router.route('/').post(registerEmployee);
router.route('/login').post(employeeLogin);
router.route('/profile/:id').get(getEmployeeDetails);
router.route('/profile/:id').patch(updateEmployeeProfile);

export default router;
