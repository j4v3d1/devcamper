const fs = require('fs');
const { mongoose } = require('mongoose');
mongoose.set('strictQuery', false);
const colors = require('colors');
const dotenv = require('dotenv');

// Load environment variables from.env file
dotenv.config({ path: './config/config.env' });

//Load models
const Bootcamp = require('./models/Bootcamp');
const Course = require('./models/Course');

//Connect to database
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});

//Read JSON files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);
//Read JSON files
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8')
);

//Import data into database
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    // await Course.create(courses);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
