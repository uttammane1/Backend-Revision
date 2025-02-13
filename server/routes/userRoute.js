const express = require('express');
const UserModel = require('../models/userModel');
const UserRouter = express.Router()

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
        res.status(400).json(error)
    }
})

UserRouter.get("/", async(req,res)=>{
    try {
        const users = await UserModel.find()
        res.status(200).json({users})
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = UserRouter