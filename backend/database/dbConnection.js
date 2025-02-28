const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://akhilrai6554:Akhil1234@cluster0.znghzf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0n';

mongoose.connect(mongoURL, {useUnifiedTopology : true ,useNewUrlParser:true })

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log("Mongo DB connection failed");
})

connection.on('connected' , ()=>{
    console.log("Mongo DB connection successful");
})

module.exports = mongoose