const { MongoClient } = require('mongodb');
const { create } = require('xmlbuilder2');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'policyDB';

// Function to generate JSON report
async function generateJSONReport(collectionName) {
  const client = new MongoClient(mongoURI);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const data = await collection.find().toArray();
    return JSON.stringify(data, null, 2);
  } finally {
    await client.close();
  }
}

// Function to generate XML report
async function generateXMLReport(collectionName) {
  const client = new MongoClient(mongoURI);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();
    const root = create({ version: '1.0' }).ele(collectionName);
    data.forEach(item => {
      const entry = root.ele('entry');
      Object.keys(item).forEach(key => entry.ele(key).txt(item[key].toString()));
    });

    return root.end({ prettyPrint: true });
  } finally {
    await client.close();
  }
}

// Generate JSON report for policyHolders
generateJSONReport('policyHolders').then(jsonReport => {
  console.log('JSON Report for policyHolders:');
  console.log(jsonReport);
});

// Generate XML report for policyHolders
generateXMLReport('policyHolders').then(xmlReport => {
  console.log('XML Report for policyHolders:');
  console.log(xmlReport);
});

// Generate JSON report for claims
generateJSONReport('claims').then(jsonReport => {
  console.log('JSON Report for claims:');
  console.log(jsonReport);
});

// Generate XML report for claims
generateXMLReport('claims').then(xmlReport => {
  console.log('XML Report for claims:');
  console.log(xmlReport);
});
