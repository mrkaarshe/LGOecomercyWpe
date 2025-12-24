import express from 'express';
import cors from "cors";
import Db  from './config/DB.js';
import dotenv from 'dotenv'
import router from './routers/AuthRouter.js'
import order from './routers/orderRouter.js';
const app = express()
app.use(cors())
dotenv.config()
Db()
app.use(express.json())

app.use('/api',router)
app.use('/api/order',order)
const port = 3232
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})