const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policy_controller');

// Define routes
router.get('/allPolicyholders', policyController.getAllPolicies); 
router.get('/deleteAll',policyController.deleteAllPolicies);
router.post('/addNewPolicyholder', policyController.addNewPolicy);
router.get('/get/:policy_id', policyController.getPolicyById);
router.put('/update/:policy_id', policyController.updatePolicy);
router.get('/deleteId/:policy_id', policyController.deletePolicy);


// Add other routes here (create, update, delete)

module.exports = router;