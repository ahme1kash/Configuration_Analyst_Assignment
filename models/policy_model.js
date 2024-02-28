const mongoose = require("mongoose")
const validator = require("validator")
const policy_holder_schema = new mongoose.Schema({
    insuredFirstName:{
        type: String,
        required:true
    },
    insuredLastName:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    DateOfBirth:{
        type: String,
        required:true
    },
    State:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
          },
    },
    phoneNumber: {  
        type: String,
        required:true,
        // unique:true,
    },
    Status:{
        type:Boolean,
        required:true,
    },
    Beneficiaries:{
        type:Array,
    },
    Relationship:{
        type: String,
        required:true,
    }


},  { collection: 'policyHolders' },{ versionKey: false }) // versionKey:false removes the __v:0 from mongo documents
module.exports = mongoose.model('policyHolders',policy_holder_schema)