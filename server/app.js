const express = require('express');
const connection = require('./config/db');
const UserRouter = require('./routes/userRoute');
 
 
const app = express()

app.use(express.json())
app.use('/user', UserRouter)
const PORT = 3000;

app.listen(PORT, async(req,res)=>{
    try {
        await connection
        console.log(`server is running on port ${PORT}. and DB is connected`)
    } catch (error) {
        console.log(`server is getting error `)
    }
})