const mongoose = require('mongoose');

module.exports.connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Database Connected!!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
