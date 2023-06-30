const express = require("express"); // import express
const cors = require("cors"); // import cors to handle cross platform
require("./config/db"); // import db

const userRouter = require("./routes/user.route") // import router 
const app = express(); // cretae express server 



app.use(cors()); // to handle cross platform
app.use(express.urlencoded({extended : true})); // to handle html forms 
app.use(express.json()); // to handle json data


app.use("/api/users",userRouter);


// for home route 
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html");
})

// for invalid route 
app.use((req,res,next)=>{
    res.status(404).json({
        message : "Route not found"
    })
})

// for handle server error 
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "somthing broke"
    })
})

module.exports = app;
