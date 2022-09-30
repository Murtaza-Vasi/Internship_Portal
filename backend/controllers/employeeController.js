import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Employee from '../models/employeeModel.js';

// DESC     Login for the employee
// ROUTE    POST /employee/login
// ACCESS   Public
export const employeeLogin = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee && existingEmployee.matchPassword(password)) {
      let token = jwt.sign(
        { user: existingEmployee._id },
        process.env.JWT_SECRET
      );

      res
        .cookie('token', token, {
          maxAge: 90000,
          httpOnly: true,
        })
        .json({
          _id: existingEmployee._id,
          username: existingEmployee.username,
          email: existingEmployee.email,
          profile: existingEmployee.profile,
        });
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.log(error);
  }
});

// DESC     Register a new employee
// ROUTE    POST /employee
// ACCESS   Public

export const registerEmployee = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const employee = await Employee.findOne({ email });
    if (employee) {
      throw new Error('The employee with this id alrady exists');
    }

    let newEmployee = Employee({
      username,
      email,
      passwordHash: password,
    });

    newEmployee = await newEmployee.save();
    res.status(201).json({ employee: newEmployee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DESC     To get the employee details
// ROUTE    GET /employee/profile/:id
// ACCESS   Private

export const getEmployeeDetails = asyncHandler(async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      res.status(404);
      throw new Error('The user with this id does not exists');
    }
    res.json({ employee: employee });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DESC     Update employee details
// ROUTE    PATCH /employee/profile/:id
// ACCESS   Private

export const updateEmployeeProfile = asyncHandler(async (req, res) => {
  try {
    const { companyInfo, jobsPosted } = req.body;

    let employee = await Employee.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          companyInfo: {
            ...companyInfo,
          },
          jobsPosted: [...jobsPosted],
        },
      }
    );

    if (!employee) {
      throw new Error('Update Failed');
    }

    res.json({ employee: employee });
  } catch (error) {
    res.json({ error: error.message });
  }
});
