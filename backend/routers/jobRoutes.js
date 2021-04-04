import express from 'express';
import { getAllJobs, getJob, postJob } from '../controllers/jobController.js';

const router = express.Router();

router.route('/').get(getAllJobs);
router.route('/').post(postJob);
router.route('/:id').get(getJob);

export default router;
