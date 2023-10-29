import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    grade:{
        type:String,
        enum:["A+", "A", "B+", "B", "C+", "C", "D+", "D", "E+", "E", "F","O"],
        default:"O"
    },
    gender:{
        type:String,
        enum:["Male", "Female", "Other"],
        required:true,
        default:"Male"
    },
    attendance:{
        type:Number,
        default:0,
    },
    marks:{
        type:Number,
        default:0,
    },
    standard:{
        type:String,
        enum:["I", "II","III","IV","V", "VI", "VII", "VIII", "IX", "X","XI", "XII"],
        defult:"I"
    }
},{
    timestamps:true,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
