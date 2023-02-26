const express =require('express');
const router =express.Router();
const User =require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const JWT_SECRET ='vishalisagoodb$oy';


// create a user using : POST "/api/auth/createuser". NO login Required

router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 Characters').isLength({ min: 5 }),

],async(req,res)=>{
    // if there are error, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// check whether a user with this email exist already
try{
 let user=await User.findOne({email:req.body.email});
 if(user){
    return res.status(400).json({error:"Sorry a user with this email already exists"});
 }
// create a new user
const salt=await bcrypt.genSalt(10);
const secPass=await bcrypt.hash(req.body.password,salt);
 user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET)
    // res.json(user);
    res.json({authtoken});
}
    catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

module.exports=router