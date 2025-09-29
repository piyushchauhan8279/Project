import express from "express"
import cors from "cors" // cross origin resource sharing 
import 'dotenv/config'


import { clerkMiddleware,requireAuth } from '@clerk/express'
import aiRouter from "./routes/aiRoutes.js"

const app=express()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())


// routes
app.get('/',(req,res)=>{
  res.send('server is live')
})

app.use(requireAuth())

app.use('/api/ai',aiRouter)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`server is listening at localhost ${PORT}`);
})

