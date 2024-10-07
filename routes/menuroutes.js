const express=require('express');
const router=express.Router();
const menuitem=require('./../models/Menuitem');

router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newMenu= new menuitem(data);
      const response=await newMenu.save();
      console.log('data saved');
      res.status(200).json(response)
    }catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'})
    }
  })

  // get the menu
router.get('/',async(req,res)=>{
    try{
      const data= await menuitem.find();
      console.log('data fetched');
      
      res.status(200).json(data)
  
  
    }catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'})
  
    }
  })
  
module.exports=router;