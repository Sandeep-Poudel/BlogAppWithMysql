import express, { Request, Response } from "express";
import colors from "colors";
import dotenv from "dotenv";
import {connectDB} from './configs/db';
import  cors from 'cors';
const blogRoutes = require('./routes/blogRoutes');
dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello aksdjfWorld!");
});

app.use('/api/', blogRoutes);

app.listen(port, () => {
    console.log(colors.yellow.bold(`Server is running on port ${port}`));
})
