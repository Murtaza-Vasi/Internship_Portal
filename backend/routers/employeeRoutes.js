import express from 'express';
import {
  employeeLogin,
  getEmployeeDetails,
  registerEmployee,
} from '../controllers/employeeController.js';

const router = express.Router();

router.route('/').post(registerEmployee);
router.route('/login').post(employeeLogin);
router.route('/profile/:id').get(getEmployeeDetails);

export default router;
