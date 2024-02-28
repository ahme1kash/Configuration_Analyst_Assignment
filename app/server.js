require('dotenv').config()
require('./config/db');
const express = require('express')
const app = express();
const domain = 'https://abctestapi.com/';
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const policyRoutes = require('./routers/policy_router');
const claimsRoutes = require('./routers/claims_router');
app.use('/policies', policyRoutes);
app.use('/claims', claimsRoutes);
try{
    const port = process.env.PORT
    app.listen(port,()=>{  
      console.log(`Server is up and running on https://${domain}:${port}`)

})
}
catch(err){
    console.log(err.message)
}
