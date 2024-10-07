const express=require('express');
const router=express.Router();
const Person=require('./../models/Person')
router.post('/',async(req,res)=>{
    try{
      const data=req.body;
      const newPerson=new Person(data);
        const response =await newPerson.save();
        console.log('data save');
        res.status(200).json(response)
  
      }catch(err){
        console.log(err);
        
        res.status(500).json({error:'internal server Error'})
        }
})

router.get('/',async(req,res)=>{
    try{
      const data= await Person.find();
      console.log('data fetched');
      
      res.status(200).json(data)


    }catch(error){
      console.log(error);
      res.status(500).json({error:'internal server error'})

    }
 })
 router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef' || workType=='manager' || workType=='waiter'){
  
      const response=await Person.find({work:workType});
        console.log('data fetched');
        res.status(200).json(response);
      }
      else{
        res.status(400).json({error:'invalid worktype'})
      }
      }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'})
      }
    });
router.put('/:id', async(req,res)=>{
    try{
        const personid=req.params.id; // extract the id from the url parameter
        const updatepersondata=req.body; //update data for the person
        const response=await Person.findByIdAndUpdate(personid,updatepersondata,{
            new:true, //return the updated document
            runValidators:true  // run mongoose validator
        })
        if(!response){
            return res.status(400).json({error:"person not found"})
        }
        console.log('data updated');
        
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'})
        }

})
router.delete('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;
        const response=await Person.findByIdAndDelete(personid);
        if(!response){
            return res.status(400).json({error:"person not found"})
            }
            console.log('data deleted');
            res.status(200).json({message:"person deleted"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'})
}
})



module.exports=router;
    


