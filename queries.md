#1 create database “policyDB”

use policyDB;

# (2) create collection named “policyHolders”

db.createCollection("policyHolders");

# (3) create collection named “claims”

db.createCollection("claims");

# Queries

# (1) Insert at least 10 documents in the collection policyHolders

db.policyHolders.insertMany(
  [{
  insuredFirstName: "John",
  insuredLastName: "Smith",
  age: 35,
  "DateOBirth": "1987-05-20",
  State: "California",
  email: "john.smith@example.com",
  phoneNumber: "+1 (555) 123-4567",
  Status: true,
  "Beneficiaries": [
  {
  "name": "James Miller"
  }
  ],
  Relationship: "Married"
  },
  {
  insuredFirstName: "Alice",
  insuredLastName: "Johnson",
  age: 42,
  DateOfBirth: "1980-10-12",
  State: "New York",
  email: "alice.johnson@example.com",
  phoneNumber: "+1 (555) 987-6543",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Sam Johhn"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Emma",
  insuredLastName: "Brown",
  age: 28,
  DateOfBirth: "1994-07-03",
  State: "Texas",
  email: "emma.brown@example.com",
  phoneNumber: "+1 (555) 321-7890",
  Status: false,
  "Beneficiaries": [
  {
  "name": "Michael Nelson"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Michael",
  insuredLastName: "Davis",
  age: 45,
  DateOfBirth: "1979-02-15",
  State: "Florida",
  email: "michael.davis@example.com",
  phoneNumber: "+1 (555) 234-5678",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Zein Silva"
  }
  ],
  Relationship: "Divorcee"
  },
  {
  insuredFirstName: "Sophia",
  insuredLastName: "Wilson",
  age: 32,
  DateOfBirth: "1990-11-30",
  State: "Washington",
  email: "sophia.wilson@example.com",
  phoneNumber: "+1 (555) 876-5432",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Isabella Gonzalez"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Olivia",
  insuredLastName: "Martinez",
  age: 37,
  DateOfBirth: "1985-08-25",
  State: "Illinois",
  email: "olivia.martinez@example.com",
  phoneNumber: "+1 (555) 765-4321",
  Status: false,
  "Beneficiaries": [
  {
  "name": "Ethan Anderson"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "James",
  insuredLastName: "Miller",
  age: 29,
  DateOfBirth: "1993-04-10",
  State: "Ohio",
  email: "james.miller@example.com",
  phoneNumber: "+1 (555) 345-6789",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Mia Brown"
  }
  ],
  Relationship: "Married"
  },
  {
  insuredFirstName: "Liam",
  insuredLastName: "Garcia",
  age: 39,
  DateOfBirth: "1983-01-05",
  State: "Michigan",
  email: "liam.garcia@example.com",
  phoneNumber: "+1 (555) 456-7890",
  Status: false,
  "Beneficiaries": [
  {
  "name": "Ava Garcia"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Emma",
  insuredLastName: "Jones",
  age: 33,
  DateOfBirth: "1989-09-18",
  State: "Massachusetts",
  email: "emma.jones@example.com",
  phoneNumber: "+1 (555) 234-5678",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Jane Doe"
  }
  ],
  Relationship: "Married"
  },
  {
  insuredFirstName: "Noah",
  insuredLastName: "Hernandez",
  age: 36,
  DateOfBirth: "1986-12-22",
  State: "Pennsylvania",
  email: "noah.hernandez@example.com",
  phoneNumber: "+1 (555) 567-8901",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Liam Taylor"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Isabella",
  insuredLastName: "Young",
  age: 41,
  DateOfBirth: "1981-06-08",
  State: "Virginia",
  email: "isabella.young@example.com",
  phoneNumber: "+1 (555) 678-9012",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Sophie Martinez"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "William",
  insuredLastName: "Lopez",
  age: 27,
  DateOfBirth: "1995-03-17",
  State: "Georgia",
  email: "william.lopez@example.com",
  phoneNumber: "+1 (555) 789-0123",
  Status: false,
  "Beneficiaries": [
  {
  "name": "Olivia Wilson"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Ava",
  insuredLastName: "Clark",
  age: 44,
  DateOfBirth: "1978-07-29",
  State: "Colorado",
  email: "ava.clark@example.com",
  phoneNumber: "+1 (555) 890-1234",
  Status: false,
  "Beneficiaries": [
  {
  "name": "Emma Brown"
  }
  ],
  Relationship: "Single"
  },
  {
  insuredFirstName: "Mason",
  insuredLastName: "Walker",
  age: 30,
  DateOfBirth: "1992-11-03",
  State: "Arizona",
  email: "mason.walker@example.com",
  phoneNumber: "+1 (555) 901-2345",
  Status: true,
  "Beneficiaries": [
  {
  "name": "David Johnson"
  }
  ],
  Relationship: "Married"
  },
  {
  insuredFirstName: "Harper",
  insuredLastName: "Lewis",
  age: 38,
  DateOfBirth: "1984-02-14",
  State: "Maryland",
  email: "harper.lewis@example.com",
  phoneNumber: "+1 (555) 012-3456",
  Status: false,
  "Beneficiaries": [
  {
  "name": "Bob Smith
  }
  ],
  Relationship: "Married"
  },
  {
  insuredFirstName: "Ethan",
  insuredLastName: "Allen",
  age: 31,
  DateOfBirth: "1991-08-05",
  State: "Oregon",
  email: "ethan.allen@example.com",
  phoneNumber: "+1 (555) 123-4567",
  Status: true,
  "Beneficiaries": [
  {
  "name": "Jane Doe"
  }
  ],
  Relationship: "Married"
  }
])

# (2) Insert at least 10 documents in the collection claims.

db.claims.insertMany([{
ID: 456789,
claimNumber: "CLM123456789",
lineOfBusiness: "Auto",
insuredFullName: "John Doe",
insuredFName: "John",
insuredLName: "Doe",
insuredDOB: "1980-05-10",
dateOfDeath: "2023-07-15",
Status: "Pending",
effectiveDate: "2023-01-01",
insuredState: "New York",
},
{
ID: 234567,
claimNumber: "CLM987654321",
lineOfBusiness: "Homeowners",
insuredFullName: "Alice Smith",
insuredFName: "Alice",
insuredLName: "Smith",
insuredDOB: "1975-09-20",
dateOfDeath: null,
Status: "Approved",
effectiveDate: "2022-11-15",
insuredState: "California",
},
{
ID: 345678,
claimNumber: "CLM567890123",
lineOfBusiness: "Health",
insuredFullName: "Emily Johnson",
insuredFName: "Emily",
insuredLName: "Johnson",
insuredDOB: "1992-03-08",
dateOfDeath: null,
Status: "Denied",
effectiveDate: "2023-04-30",
insuredState: "Texas",
},
{
ID: 567890,
claimNumber: "CLM234567890",
lineOfBusiness: "Life",
insuredFullName: "Michael Brown",
insuredFName: "Michael",
insuredLName: "Brown",
insuredDOB: "1988-12-15",
dateOfDeath: null,
Status: "Pending",
effectiveDate: "2024-01-01",
insuredState: "Florida",
},
{
ID: 789012,
claimNumber: "CLM789012345",
lineOfBusiness: "Auto",
insuredFullName: "Sophia Wilson",
insuredFName: "Sophia",
insuredLName: "Wilson",
insuredDOB: "1965-06-25",
dateOfDeath: null,
Status: "Pending",
effectiveDate: "2023-09-10",
insuredState: "Michigan",
},
{
ID: 901234,
claimNumber: "CLM345678901",
lineOfBusiness: "Homeowners",
insuredFullName: "Daniel Martinez",
insuredFName: "Daniel",
insuredLName: "Martinez",
insuredDOB: "1970-11-18",
dateOfDeath: null,
Status: "Approved",
effectiveDate: "2022-08-20",
insuredState: "Texas",
},
{
ID: 123456,
claimNumber: "CLM901234567",
lineOfBusiness: "Health",
insuredFullName: "Olivia Jones",
insuredFName: "Olivia",
insuredLName: "Jones",
insuredDOB: "1982-04-05",
dateOfDeath: null,
Status: "Denied",
effectiveDate: "2023-03-15",
insuredState: "California",
},
{
ID: 234567,
claimNumber: "CLM456789012",
lineOfBusiness: "Life",
insuredFullName: "David Taylor",
insuredFName: "David",
insuredLName: "Taylor",
insuredDOB: "1976-09-30",
dateOfDeath: null,
Status: "Approved",
effectiveDate: "2022-12-01",
insuredState: "New York",
},
{
ID: 345678,
claimNumber: "CLM012345678",
lineOfBusiness: "Auto",
insuredFullName: "Emma Garcia",
insuredFName: "Emma",
insuredLName: "Garcia",
insuredDOB: "1990-02-10",
dateOfDeath: null,
Status: "Pending",
effectiveDate: "2023-05-05",
insuredState: "Texas",
},
{
ID: 456789,
claimNumber: "CLM678901234",
lineOfBusiness: "Homeowners",
insuredFullName: "William Brown",
insuredFName: "William",
insuredLName: "Brown",
insuredDOB: "1979-07-12",
dateOfDeath: null,
Status: "Approved",
effectiveDate: "2022-10-01",
insuredState: "Florida",
}])

# (3) Find record from policyHolders

## a) All policyholders info

db.policyHolders.find({})

## b) Find policy holder by insuredFirstName

db.policyHolders.find({insuredFirstName:"John"})

## c) Find policy holder by Status

db.policyHolders.find({Status:true})

## d) Find policy holder with date range (From date to Date)

db.policyHolders.find(
    {
      DateOfBirth:
        {$gt: '1980-11-01',
        $lt: '1990-11-01'}
    })


# (3) Find record from claims

## a) All claims info
db.claims.find({})

## b) Find claims by claimNumber
db.claims.find({claimNumber: "CLM012345678"})

## c) Find claims by insuredDOB
db.claims.find({insuredDOB: "1975-09-20"})

## d) Find claims with dateOfDeath (From date to Date)
db.claims.find({dateOfDeath::{$gte:"1975-09-20",$lte:"1995-11-21"}})

# (4) Update policyholders with at least 3 parameters separately

db.policyHolders.updateOne({insuredFirstName:"Tony"},{$set:{insuredFirstName:"John"}})
db.policyHolders.updateOne({insuredFirstName:"Tony"},{$set:{phoneNumber:"+897 638786838"}})
db.policyHolders.updateOne({insuredFirstName:"Tony"},{$set:{age:27}})

# (4) Update claims with at least 3 parameters separately

db.claims.updateOne({claimNumber:"CLM789012345"},{$set:{Status:"Pending"}})
db.claims.updateOne({insuredFullName:"Emma Garcia"},{$set:{insuredState:"Kentucky"}})
db.claims.updateOne({insuredFName:"William"},{$set:{insuredFName:"Tom"}})

# (6) Delete the PolicyHolder by name starting with letter A.
db.policyHolders.deleteMany({insuredFirstName:/^A/})


# (7) Delete a claim which was created on a particular date.
db.claims.deleteOne({effectiveDate:"2022-12-01"})

# (8) Delete all from PolicyHolders collection who have age greater than “ 80”

db.policyHolders.deleteMany({age:{$gt:80}})

# (9) Update the PolicyHolders Relationship to Married where Age is > 25.
db.policyHolders.updateMany(
  {"age": {"$gt": 25}},
  {$set: {"Relationship": "Married"}}
)


# (10) Update the claims where dateOfDeath is 1 year before the current date
var oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

db.claims.updateMany(
  {"dateOfDeath": {"$lte": oneYearAgo}},
  {$set: {"Status": "Expired"}}
)
