const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
