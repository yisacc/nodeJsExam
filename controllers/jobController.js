const mongoose =require('mongoose');
const { ItemSchema } =require('../models/jobModel');

const Job = mongoose.model('Job', ItemSchema);

exports.addNewJob = (req, res, next) => {
  let newJob = new Job({
    _id: new mongoose.Types.ObjectId(),
    jobTitle: req.body.jobTitle,
    jobDescription: req.body.jobDescription,
    basicQualifications: req.body.basicQualifications,
    preferredQualifications: req.body.preferredQualifications,
    company: req.body.company,
    employmentType: req.body.employmentType,
    createdDate: new Date(),
  });
  newJob.save((err, newJob) => {
    if (err) {
      res.send(err);
    }
    res.json(newJob);
  });
};

exports.getJobById = (req, res, next) => {
    const jobId=req.query.jobId;
  if (jobId) {
    Job.find({ _id: jobId })
      .then((job) => {
        res.json(job);
      })
      .catch((err) => res.send(err));
  } else {
    next();
  }
};
exports.fetchJobs = async (req, res) => {
 

  Job.find()
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => res.send(err));
};
exports.editJob = (req, res) => {
  Job.findById(req.query.jobId, function (err, job) {
    if (!job) {
      return next(new Error('Could not load Document'));
    } else {
      job.updatedDate = new Date();
      job.jobTitle = req.body.jobTitle;
      job.jobDescription = req.body.jobDescription;
      job.basicQualifications = req.body.basicQualifications;
      job.preferredQualifications = req.body.preferredQualifications;
      job.company = req.body.company;
      job.employmentType = req.body.employmentType;
      job.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.json(job);
        }
      });
    }
  });
};
exports.deleteJob = (req, res) => {
  Job.deleteOne({ _id: req.query.jobId })
    .then((job) => {
      res.json(job);
    })
    .catch((err) => res.send(err));
};
