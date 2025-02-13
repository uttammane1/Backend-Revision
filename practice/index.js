// const express = require("express");
// const app = express();
// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require("express")
const app = express()
const PORT =8080

app.listen(PORT, (err) =>{
    if(err){
        console.error("error", err)
    }else{
    console.log(`sercer is running on ${PORT}`)
    }
})