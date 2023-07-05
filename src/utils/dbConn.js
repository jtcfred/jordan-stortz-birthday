import dotenv from 'dotenv';
import {MongoClient} from "mongodb";

dotenv.config();
const url = process.env.MONGODB_URI;

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    // If a client connection is already established, return the existing client
    return cachedClient;
  }

  // Create a new MongoClient instance
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to the database');
    const db = client.db();
    
    // Cache the client instance for future use
    cachedClient = client;

    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
