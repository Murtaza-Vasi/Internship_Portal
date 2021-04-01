import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const employeeSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      require: true,
    },
    jobInfo: {
      jobTitle: {
        type: String,
        require: true,
      },
      jobType: {
        type: String,
        require: true,
      },
      jobDescription: {
        type: String,
        require: true,
      },
      companyName: {
        type: String,
        require: true,
      },
      companyURL: {
        type: String,
        require: true,
      },
      workType: {
        type: String,
        require: true,
      },
      payScale: {
        type: String,
        require: true,
      },
    },
  },
  {
    timeStamps: true,
  }
);

employeeSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) {
    next();
  }

  const salt = await bcrypt.genSalt();
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

const Employee = mongoose.model('employee', employeeSchema);
export default Employee;
