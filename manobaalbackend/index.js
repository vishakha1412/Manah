 import express from "express"
const app = express()   
 
import dotenv from "dotenv"
import connectDB from "./db/server.js"
import cors from "cors"
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser"
 


dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/api',authRoute)
 
const port=process.env.PORT || 3000
app.listen(port,()=>{
    connectDB();
    console.log(`server is running on port ${port}`);
})