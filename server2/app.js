const express = require('express');
// const { connection } = require('mongoose');

const app = express()

// app.use(express.json)

const port = 3000;

app.listen(port, ()=>{
    try {
        // await connection
        console.log(`server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})