import User from '../../../models/userModel.js';
import bcrypt from 'bcryptjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { validateRegisterUser } from '../../middleware/validator.js';

export const authRouter = express.Router();

/**
 * @desc 
 * @route /api/auth/register
 * @method Post
 * @access public
 */
authRouter.post('/register',asyncHandler(async(req,res)=>{

   const {error} = validateRegisterUser(req.body);
   if(error){
      return res.status(400).json({ message : error.details[0].message});
   }
   
    const existingUser = await User.findOne({username :req.body.username});
    if(existingUser){
       return  res.status(400).json({message : "this user is already registered"});
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    const user = await User.create({
        "username" : req.body.username,
        "password" : hashedPassword,
        "role" : req.body.role
       });
       const token = user.generateToken();
       const {password, ...userWithoutPassword} = user._doc;
       res.json({
         message: "User registered",
          user : userWithoutPassword,token
         
       })
    }));




/**
 * @route   GET api/auth/login
 * @desc    
 * @access  Public
 */

authRouter.post('/login',asyncHandler(async (req,res)=>{
    const user = await User.findOne({ username : req.body.username });
    if(!user){
        return res.status(400).json({ message : "invalid username or password"});
    }
    const isPasswordMatch = await bcrypt.compare(req.body.password,user.password);
   if(!isPasswordMatch){
      return res.status(400).json({message : "invalid username or password"});
   } 
   const token = user.generateToken();
   const {password,...others} = user._doc;
   res.status(200).json({message: "login successful", others,token});
}));



