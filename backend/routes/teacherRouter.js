import express from 'express';
const teacherRouter = express.Router();
import { 
    getAllTeachers,
    addTeacher,
    updateTeacher,
    deleteTeacher
} from '../controller/teacherController.js';


teacherRouter.get("/all", getAllTeachers);
teacherRouter.post('/new', addTeacher);
teacherRouter.put('/:id', updateTeacher);
teacherRouter.delete('/:id', deleteTeacher);

export default teacherRouter