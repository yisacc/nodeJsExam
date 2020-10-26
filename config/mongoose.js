const mongoose =require('mongoose');
const migration = require('../lib/migration.lib');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});


exports.connect = () => {
  mongoose
    .connect('mongodb://localhost/jobsListTrial', {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(async () => {
      console.log('mongoDB connected...');
      await migration.migratePermissions();
      await migration.migrateRoles();
      await migration.migrateUsers();
    });
  return mongoose.connection;
};
