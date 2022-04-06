import express from 'express';
import {userSignup,userLogin} from '../controller/user-controller.js'
const router=express.Router();

router.post('/signup',userSignup);

router.get('/login',userLogin);
export default router;