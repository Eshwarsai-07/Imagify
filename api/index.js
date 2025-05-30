import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

const allowedOrigins = [
  "http://localhost:3000",           // Development frontend
  "https://imagify-client-six.vercel.app", // Production frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // If you use cookies/auth
}));

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res)=>{
    return res.send("API WORKING")
})

app.listen(PORT, '0.0.0.0', ()=>console.log("Server running on port " + PORT))
