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
    companyInfo: {
      companyName: {
        type: String,
      },
      companyLocation: {
        type: String,
      },
      companyURL: {
        type: String,
      },
      companyDescription: {
        type: String,
      },
    },
    jobsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  },
  {
    timeStamps: true,
  }
);

employeeSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.passwordHash);
};

employeeSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) {
    next();
  }

  const salt = await bcrypt.genSalt();
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

const Employee = mongoose.model('employee', employeeSchema);
export default Employee;
