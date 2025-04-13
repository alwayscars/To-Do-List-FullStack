import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  dotenv  from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT= process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;
  
mongoose 
         .connect(MONGOURL)
         .then(()=>{
            console.log("Connection successful")
            app.listen(PORT,()=>{
                console.log(`Server is running on :${PORT}`)
            });
         })
         .catch((error)=>{
            console.group(error)
         })

         app.use(route);