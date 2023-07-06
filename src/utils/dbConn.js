import dotenv from 'dotenv';
import {MongoClient} from "mongodb";

dotenv.config();
const url = process.env.MONGODB_URI;

let cachedClient;

export async function connectToDatabase() {
  
  try {
    if (cachedClient) {
      // If a client connection is already established, return the existing client
      return cachedClient;
    }
  
    // Create a new MongoClient instance and connect
    cachedClient = await new MongoClient(url).connect();
    console.log('Connected successfully to the database');

    return cachedClient;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
