import express from 'express';
const studentRouter = express.Router();

import {
    addStudent,
    getStudent,
    getAllStudent,
    editStudent,
    deleteStudent,
} from "../controller/studentController.js";


studentRouter.post('/new', addStudent);
studentRouter.get('/all', getAllStudent);
studentRouter.get('/:id', getStudent);
studentRouter.put('/:id', editStudent);
studentRouter.delete('/:id', deleteStudent);


export default studentRouter;
