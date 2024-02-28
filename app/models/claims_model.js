const mongoose = require("mongoose")
const claims_schema = new mongoose.Schema({
    ID:{
        type: Number,
        required:true
    },
    claimNumber:{
        type: String,
        required:true,
        unique:true
    },
    lineOfBusiness:{
        type: String,
        required:true
    },
    insuredFullName:{
        type: String,
        required:true
    },
    insuredFName:{
        type: String,
        required:true
    },
    insuredLName:{
        type:String,
        required:true,
    },
    insuredDOB: {  
        type: String,
        required:true,
        // unique:true,
    },
    dateOfDeath:{
        type:String,
        // required:true,
    },
    Status:{
        type:String,
        required:true
    },
    effectiveDate:{
        type: String,
        required:true,
    },
    insuredState:{
        type: String,
        required:true,
    }


},  { collection: 'claims' },{ versionKey: false }) 
module.exports = mongoose.model('claims',claims_schema)
