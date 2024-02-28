const Policies = require('../models/policy_model');

const getAllPolicies = async (req, res) => {
    try {
      const policies = await Policies.find();
      console.log(policies)
      res.json(policies);
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error.message)
    }

}

  const getPolicyById = async(req,res)=>{
    try{
        
        const policy_details = await Policies.findById(req.params.policy_id);
        res.status(200).json(policy_details)

    }
    catch(err){
        res.json(err.messaage)
    }
  }
const addNewPolicy = async(req,res)=>{
    try{
        const email = req.body.email
        const existingPolicy = await Policies.findOne({email})
        if (existingPolicy){
            res.json("Policy Already Exists")
            return res.status(409);
        }
        
    const newPolicy = new Policies({
        insuredFirstName: req.body.insuredFirstName,
        insuredLastName: req.body.insuredLastName,
        age: req.body.age,
        DateOfBirth: req.body.DateOfBirth,
        State: req.body.State,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        Status: req.body.Status,
        Beneficiaries: req.body.Beneficiaries,
        Relationship: req.body.Relationship,
    }
    )
    
    
    if(await newPolicy.save()){
        let payload = newPolicy
        res.status(200).json(payload)
    }
}
    catch(err){
        console.log(err.messaage,err)
    }
}
const updatePolicy = async(req,res)=>{
    try{
        const originalPolicy = await Policies.findById(req.params.policy_id);
        const editedPolicy = {
            insuredFirstName: req.body.insuredFirstName,
            insuredLastName: req.body.insuredLastName,
            age: req.body.age,
            DateOfBirth: req.body.DateOfBirth,
            State: req.body.State,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            Status: req.body.Status,
            Beneficiaries: req.body.Beneficiaries,
            Relationship: req.body.Relationship,
        }
        const updated = await Policies.findByIdAndUpdate(
        {_id:req.params.policy_id},
        editedPolicy,
        {new:true}  
        console.log(originalPolicy,updated)
        res.json(updated)
    }
    catch(err){
        console.log(err.messaage)
    }
}

  const deletePolicy = async(req,res)=>{
    try{
        console.log(req.params)
        const policy_removed = await Policies.findByIdAndDelete(req.params.policy_id)
        console.log(`Deleted Policy is ${policy_removed}`)
        res.status(200).json({policy_removed})
    }
    catch(err){
        console.log(err.message)
    }
  }
  const deleteAllPolicies=async(req,res)=>{
    try{
        await  Policies.deleteMany()
        res.json("All Policies Deleted")
    }
    catch(err){
        res.json(err.message)
    }
  }
  module.exports = {
    getAllPolicies,
    getPolicyById,
    addNewPolicy,
    updatePolicy,
    deletePolicy,
    deleteAllPolicies,
  };
  
