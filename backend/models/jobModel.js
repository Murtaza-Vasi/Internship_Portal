import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
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
    skills: [{
      type: String,
      require: true
    }]
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('jobs', jobSchema);
export default Job;
