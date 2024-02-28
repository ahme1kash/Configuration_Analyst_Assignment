const mongoose = require('mongoose')
require('dotenv').config()
connect = async  ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
    });
    console.log("Connection with MongoDB established successfully.")
    }
    catch(error){
        console.log(error.message,'Connection Unsuccessful');
        process.exit(1);
    }
}
connect()
module.exports = connect;
