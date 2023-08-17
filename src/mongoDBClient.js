const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://Boris:Boris_16@cluster0.xbxtwxc.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'blog_backend';

export const createUser = ({ email, name, password }) =>
  create_user(email, name, password).finally(client.close());

export {client, dbName}