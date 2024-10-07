const mongoose=require('mongoose');
require('dotenv').config();

//define the mongodb connectino url

// const mongoURL='mongodb://localhost:27017/hotels' //local url

const mongoURL=process.env.MONGODB_URL;
//set up to the database
//it is always necessary
mongoose.connect(mongoURL)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const db=mongoose.connection;

//define event listeners 
db.on('connected',()=>{
    console.log('connected to db');
    
});
db.on('error',()=>{
    console.log('error connecting to db');
    });
db.on('disconnected',()=>{
    console.log('disconnected from db');
});

//export the db connection
module.exports=db;  //export the db connection to use it in other files

