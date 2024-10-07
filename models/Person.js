const mongoose=require('mongoose')

const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:  {
        type:Number,
        
       
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true

    },
    mobile:{
        type:Number,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    
    },
    salary:{
        type:Number,
        required:true
    }
});

//this is the model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;  //exporting the model to use in other files
