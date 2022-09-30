import asyncHandler from 'express-async-handler';
import Job from '../models/jobModel.js';

// DESC     Get all jobs
// ROUTE    GET /jobs/
// ACCESS   Public

export const getAllJobs = asyncHandler(async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ jobs });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DESC     Post a Job
// Route    POST /jobs/
// Access   Private

export const postJob = asyncHandler(async (req, res) => {
  try {
    const {
      jobTitle,
      jobType,
      jobDescription,
      companyName,
      companyURL,
      workType,
      payScale,
      skills,
    } = req.body;

    let job = Job({
      jobTitle,
      jobType,
      jobDescription,
      companyName,
      companyURL,
      workType,
      payScale,
      skills,
    });

    job = await job.save();
    console.log(job._id);
    res.status(201).json({ id: job._id, job: job });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// DESC     Get job by Id
// ROUTE    GET /jobs/:id
// ACCESS   Public

export const getJob = asyncHandler(async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      res.status(404);
      throw new Error('No job with this Id');
    }

    res.json({ job: job });
  } catch (error) {
    res.json({ error: error.message });
  }
});
