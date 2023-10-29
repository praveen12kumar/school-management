import express from "express";
import colors from "colors";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import {config} from "dotenv";
import connectDB from "./db/db.connect.js";
import studentRouter from "./routes/studentRouter.js";
import teacherRouter from "./routes/teacherRouter.js";
import cors from "cors";
import helmet from "helmet";

config();

const PORT = process.env.PORT || 3000;
const app = express();

//connect to database
connectDB();


// use middleware
app.use(express.json());

//cors
app.use(cors());

// helmet
app.use(helmet());

//using Routes
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/teachers', teacherRouter);


app.get('/', (req, res) => {
    res.send("Hello, Express!");
});



// use error middleware
app.use(errorMiddleware);

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`.cyan.underline);
});

