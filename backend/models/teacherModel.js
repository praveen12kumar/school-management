import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

const Teacher = mongoose.model("Teacher",TeacherSchema);

export default Teacher;