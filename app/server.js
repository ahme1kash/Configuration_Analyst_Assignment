require('dotenv').config()
require('./config/db');
const express = require('express')
const app = express();
// const path = require("path")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.set(path.join(__dirname, "views"))
// app.set("view engine", "pug");
// app.use('/public', express.static(path.join(__dirname, 'public')));
const policyRoutes = require('./routers/policy_router');
const claimsRoutes = require('./routers/claims_router');
app.use('/policies', policyRoutes);
app.use('/claims', claimsRoutes);
try{
    const port = process.env.PORT
    app.listen(port,()=>{  
      console.log(`Server is up and running at port ${port}`)

})

}
catch(err){
    console.log(err.message)
}