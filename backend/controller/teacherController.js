import Teacher from "../models/teacherModel.js";

// get all the teachers
const getAllTeachers = async(req, res)=>{
    try {
        const teachers = await Teacher.find({});

        if(!teachers){
            return res.status(404).json({
                message:"Teachers not found"
            })
        }
        res.status(200).json({
                message:"All Teachers",
                data: teachers
        })
    } catch (error) {
        
    }
}

// Add a new teacher

const addTeacher = async(req, res)=>{
   try {
    const {name, subject, contact} = req.body;
    if(!name || !subject || !contact){
        return res.status(404).json({
            message:"Please enter all fields"
        })
    }

    const teacher = await Teacher.create({
        name, subject, contact
    })

    res.status(200).json({
        message:"Teacher created successfully",
        data: teacher
    }) 
   } catch (error) {
    res.status(500).json({
        message:"Teacher creation failed"
    })
   } 
} 


const updateTeacher = async(req, res)=>{
    try {
        const {id} = req.params;
        let teacher = await Teacher.findById(id);

        if(!teacher){
            return res.status(404).json({
                message:"Teacher not found"
            })
        }
        teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {new:true})

        res.status(200).json({
            message:"Teacher updated successfully",
            data: teacher
        })

    } catch (error) {
        res.status(500).json({
            message:"Error in updateTeacher"
        })
    }
}


const deleteTeacher = async(req, res) => {
    try {
        const {id} = req.params;
        let teacher = await Teacher.findById(id);

        if(!teacher){
            return res.status(404).json({
                message:"Teacher not found"
            })
        }

        teacher = await Teacher.findByIdAndDelete(id);
        res.status(201).json({
            message:"Teacher deleted Successfully",
            data: teacher,
        })
    } catch (error) {
        res.status(500).json({
            message:"Error while deleting teacher",
            error
        })
    }
}

export {
    getAllTeachers,
    addTeacher,
    updateTeacher,
    deleteTeacher,
}