const express = require('express');
const UserModel = require('../models/userModel');
const UserRouter = express.Router();


UserRouter.get("/", async(req,res)=>{
    try {
        const users = await UserModel.find()
        res.status(200).json({users})
    } catch (error) {
        res.status(400).json({error})
    }
})

UserRouter.post('/register', async(req,res)=>{
    const {username, email, password} = req.body;
    try {
        const user = new UserModel({
            username,
            email,
            password
        });
        await user.save();
        res.status(200).json("regiser done")
    } catch (error) {
        res.status(400).json("regiser failed.")
    }
})

UserRouter.delete('/delete/:id', async(req,res)=>{
     const userid = req.params.id;
     const payload = req.body
     try {
        const deleteUser = await UserModel.findByIdAndDelete({_id:userid},payload);
        return res.status(201).json('user deleted.', deleteUser)
     } catch (error) {
        res.status(400).json(error)
     }
}) 


UserRouter.post('/login', async(req,res)=>{
    const {email,password}= req.body;
    try {
      const user = await UserModel.findOne({email})
 
      if(!user){
         return res.send('user not found.')
      }
      if(user){if(password==user.password){
         return res.status(200).json(`login done ${user}.`)
      }else{
         return res.send('incorrect password.')
      }
     }
    } catch (error) {
      res.status(501).json(error)
    }
 
 })

module.exports = UserRouter