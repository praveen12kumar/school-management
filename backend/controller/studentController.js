import Student from "../models/studentModel.js";


//@desc add a student
//@route POST /api/v1/students/new
//@access private

const addStudent = async (req, res)=>{
    try {
        const {name, age, grade, gender, attendance, marks, standard} = req.body;
        console.log(name, age, grade, gender, attendance, marks, standard);

        if(!name || !age || !grade || !gender || !attendance || !marks || !standard){
            return res.status(404).json({
                    message: "Please enter all the required fields",
            })
        }
        
        const student = await Student.create({
            name,
            age,
            grade,
            attendance,
            marks,
            standard
        });
    
        res.status(201).json({
            success:true,
            message: "Student created successfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message: "Error in creating student",error
        })
    }
};


const getStudent = async(req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json({
            message:"Student is",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message:"Error in getting student",
        })
    }
}


const getAllStudent = async (req, res) => {
    try {
        const student = await Student.find({});

        if(!student) {
            return res.status(404).json({
                    message:"Students not found",
                })
        }
        res.status(200).json({
            message:"All Student",
            data: student
        });
        
    } 
    catch (error) {
        res.status(500).json({
        message:"Error in getting all students",
        });    
    }
};


const editStudent = async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({
                message:"Student not found",
            }); 
        }

        student = await Student.findByIdAndUpdate(req.params.id, req.body,{new:true});
        
        res.status(200).json({
            message:"Student updated Successfully",
            data: student
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Error in updating student",
        })
    }
};


const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        let student = await Student.findById(id);

        if(!student) {
            return res.status(404).json({
                message: "Student not found"
            })
        }

        student = await Student.findByIdAndDelete(id);
        res.status(200).json({
            message: "Student deleted successfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({
            message:"Error in deleting student"
        })
    }
}





export {
    addStudent,
    getStudent,
    getAllStudent,
    editStudent,
    deleteStudent,
};