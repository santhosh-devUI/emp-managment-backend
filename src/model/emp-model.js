import mongoose from "mongoose";

const empSchema= new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    mobile:{
        type:String
    },
    salary:{
        type:String
    }
},{
    timestamps:true
})

const empModel=mongoose.model("employees", empSchema)

export default empModel