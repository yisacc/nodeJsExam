const mongoose =require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
      },
      jobDescription: {
        type: String,
        required: true
      },
      basicQualifications: {
        type: String,
      },
      preferredQualifications: {
        type: String,
      },
      company : {
        type: String,
        required: true
      },
      employmentType: {
        type: String,
      },
      estimatedpayRange: {
        type: String,
      },
      createdDate: {
        type: Date,
      },
      updatedDate:{
        type:Date,
      }
});

// plugins
JobSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Job', JobSchema);