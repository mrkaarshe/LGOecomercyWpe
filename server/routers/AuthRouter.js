import express from 'express';
const router = express.Router()
import { Register, Login } from '../controller/AuthController.js';



router.post('/Register',Register)
router.post('/Login',Login)




router.get('/',(req,res)=>{
    res.send('yow up')
})



export default router