const { MongoClient } = require('mongodb');

const USERNAME = process.env.MDB_USERNAME;
const PASSWORD = process.env.MDB_PASSWORD;
const MDB_URL = process.env.MDB_URL;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${MDB_URL}/?retryWrites=true&w=majority`;

const Client = new MongoClient(uri);

module.exports = Client;