// // console.log('server file is running');
// // function add(A,B){
// //     return A+B;

// // }
// // var add=(a,b)=>{return a+b};
// // var add=(a,b)=>a+b;
// // var result=add(54,77);
// // console.log(result);
// // (function(){
// //     console.log('IIFE');
// // })(); 
//  // it will run itself
//  const add= function (a,b,manish){
//     var result=a+b;
//     console.log('result'+result);
//     manish();
    
//  }
// //  add(5,7, function(){
// //     console.log('manish');
// //     });
// add(4,5,()=>console.log('add complete'))

// const { log } = require('console');
// const fs=require('fs');
// const os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('fi.txt','hello world'+user.username+'/n',()=>{
//     console.log('file is');
// });
// const notes=require('./notes')
// const _=require('loadash')
// console.log();
const express = require('express')
const app = express();
const db=require('./db');

const bodyParser=require("body-parser");
app.use(bodyParser.json());//req.body






app.get('/', function (req, res) {
  res.send('welcome to our hotel')
})

// app.get('/chicken', function (req, res) {
//     res.send('Hello World how are houm,iwould like to give')
//   })
//get send the data from the backend to frontend
//post send the data from frontend to backend
//put update the data
//delete delete the data
// app.get('/meal', function (req, res) {
//     const xe_chicken= {
//         name:'chicken',
//         size:'biġ',
//         variaty:'desi'

//     }
//     res.send(xe_chicken)
//   })

  
//  const data=req.body; //req body is containg the data
//  const newperson=new Person(data); //create a new person using the mongoose model
    
//  newperson.save((error,saveperson)=>{
//   if(error){
//     console.log('error saving person',error);
//     res.status(500).json({error:'internal server error'})

//     }else{
//       console.log('data saved successfully');
//       res.status(200).json(saveperson);
//     }

//   })

// get the data from backend
 // for menu
//import the router file
const personroutes= require('./routes/personroutes')
//use the routers
app.use('/person',personroutes);
const menuitemroutes=require('./routes/menuroutes')
app.use('/menu',menuitemroutes)



app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
