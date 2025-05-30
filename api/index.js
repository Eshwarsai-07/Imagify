import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())


await connectDB()
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res)=>{
    return res.send("API WORKING")
})

const cors = require("cors");

const allowedOrigins = [
  "http://localhost:4000",           // Development frontend
  "https://imagify-client-six.vercel.app", // Production frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // If you use cookies/auth
}));


app.listen(PORT, ()=>console.log("Server running on port " + PORT))
