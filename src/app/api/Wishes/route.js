import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import Wish from '@/models/wish';
import dbConnect from '@/utils/dbConn';

dotenv.config();
const URI = process.env.MONGODB_URI
const options = {}
const client = new MongoClient(URI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
  }
}

connectToDatabase();

// const testimonials = [
//     {
//       heading: '10/10 Girlfriend',
//       text: 'Happy Birthday Jordan! I am so lucky to be with you! I hope your birthday is epic :D',
//       name: 'Jackson',
//       title: 'Jordan\'s Beautiful Boyfriend',
//     },
//     {
//       heading: 'Dirty Broad',
//       text: 'Happy birthday old woman :)',
//       name: 'Rowan',
//       title: 'Jackson\'s Boyfriend',
//     },
//     {
//       heading: 'She aight I guess',
//       text: 'She let me borrow a pencil once',
//       name: 'Harry Potter',
//       title: 'Imaginary Friend',
//     },
//   ];



export async function GET(req, res) {
  try {
    const wishes = await Wish.find();
    res.status(200).json(wishes);
  } catch (error) {
    console.error('Error retrieving wishes:', error);
    res.status(500).json('Failed to retrieve wishes');
  }
}

export async function POST(req, res) {
  const { heading, text, name, title } = req.body;

  try {
    const newWish = new Wish({
      heading,
      text,
      name,
      title,
    });
    await newWish.save();
    res.status(201).json('Birthday wish added successfully :D');
  } catch (error) {
    console.error('Error adding wish:', error);
    res.status(500).json('Failed to add wish');
  }
}


