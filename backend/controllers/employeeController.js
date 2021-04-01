import Employee from '../models/employeeModel.js';

// Login for the employee
const employeeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = Employee({
      email,
      password,
    })
  } catch (error) {
    console.log(error);
  }
};
