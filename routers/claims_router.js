const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claims_controller');

// Define routes
router.get('/allClaims', claimController.getAllClaims); 
router.get('/deleteAll',claimController.deleteAllClaims);
router.post('/addNewClaim', claimController.addNewClaim);
router.get('/get/:claim_id', claimController.getClaimById);
router.put('/update/:claim_id', claimController.updateClaim);
router.get('/deleteId/:claim_id', claimController.deleteClaim);


// Add other routes here (create, update, delete)

module.exports = router;