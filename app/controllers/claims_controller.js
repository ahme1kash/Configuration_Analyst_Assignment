const Claims = require('../models/claims_model');

const getAllClaims = async (req, res) => {
    try {
      const claims = await Claims.find();
      res.json(claims);
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error.message)
    }

}

  const getClaimById = async(req,res)=>{
    try{
        const claim_details = await Claims.findById(req.params.claim_id);
        res.status(200).json(claim_details)

    }
    catch(err){
        res.json(err.messaage)
    }
  }
const addNewClaim = async(req,res)=>{
    try{
        const FullName = req.body.insuredFullName
        const claim = req.body.claimNumber
        const existingClaim = await Claims.findOne({FullName,claim})
        if (existingClaim){
            res.json("Claim has already been processed earlie")
            return res.status(409);
        }
        
    const newClaim = new Claims({
        ID: req.body.ID,
        claimNumber: req.body.claimNumber,
        lineOfBusiness: req.body.lineOfBusiness,
        insuredFullName: req.body.insuredFullName,
        insuredFName: req.body.insuredFName,
        insuredLName: req.body.insuredLName,
        insuredDOB: req.body.insuredDOB,
        dateOfDeath: req.body.dateOfDeath,
        Status: req.body.Status,
        effectiveDate: req.body.effectiveDate,
        insuredState: req.body.insuredState
    }
    )
    
    
    if(await newClaim.save()){
        let payload = newClaim
        res.status(200).json(payload)
    }
}
    catch(err){
        console.log(err.messaage,err)
    }
}
const updateClaim = async(req,res)=>{
    try{
        const originalClaim = await Claims.findById(req.params.claim_id);
        const editedClaim = {
            ID: req.body.ID,
            claimNumber: req.body.claimNumber,
            lineOfBusiness: req.body.lineOfBusiness,
            insuredFullName: req.body.insuredFullName,
            insuredFName: req.body.insuredFName,
            insuredLName: req.body.insuredLName,
            insuredDOB: req.body.insuredDOB,
            dateOfDeath: req.body.dateOfDeath,
            Status: req.body.Status,
            effectiveDate: req.body.effectiveDate,
            insuredState: req.body.insuredState
        }
        const updated = await Claims.findByIdAndUpdate(
        {_id:req.params.claim_id},
        editedClaim,
        {new:true}  
        )
        console.log(originalClaim,updated)
        res.json(updated)
    }
    catch(err){
        console.log(err.messaage)
    }
}

  const deleteClaim = async(req,res)=>{
    try{
        const claim_removed = await Claims.findByIdAndDelete(req.params.claim_id)
        console.log(`Deleted Claim is ${claim_removed}`)
        res.status(200).json(claim_removed)
    }
    catch(err){
        console.log(err.message)
    }
  }
  const deleteAllClaims=async(req,res)=>{
    try{
        
        await  Claims.deleteMany()
        res.json("All Claims Deleted")
    }
    catch(err){
        res.json(err.message)
    }
  }
  module.exports = {
    getAllClaims,
    getClaimById,
    addNewClaim,
    updateClaim,
    deleteClaim,
    deleteAllClaims,
  };
  
