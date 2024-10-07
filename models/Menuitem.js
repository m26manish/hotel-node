const mongoose=require('mongoose');

const menuitemSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true

    },
    taste:{
        type:String,
        required:true,
        enum:['sweet','spicy','sour']
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredient:{
        type:String,
        required:true,
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }


})
const menuitem=mongoose.model('menuitem',menuitemSchema);
module.exports=menuitem;  //export the model to use in other files
