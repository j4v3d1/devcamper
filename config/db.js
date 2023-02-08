const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold
  );
};
module.exports = connectDB;
