import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/utils/dbConn';

const db = await connectToDatabase()
const collection = db.collection("Birthday_Wishes")


export async function GET() {
  try {
    const wishes = await collection.find({}).toArray();
    return NextResponse.json(wishes)
  } catch {
    return NextResponse.json('error', {status: 500})
  }
}

export async function POST(req) {
  try {
    console.log("post req received")
    const data = await req.json();
    console.log("data recieved")
    const newWish = {
      heading: data.heading,
      text: data.text,
      name: data.name,
      title: data.title,
    };
    console.log("wish created: ", newWish)
    await collection.insertOne(newWish)
    console.log("wish inserted")
    return NextResponse.json(newWish)
  } catch (error) {
    return NextResponse.json({error: error.message}, {status: 500})
  }
}


