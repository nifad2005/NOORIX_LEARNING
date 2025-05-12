import { NextResponse } from "next/server";
import clientPromise from "../../../libs/database/authDB";
export const GET = async()=>{
    try{
        const client = await clientPromise
        const db = client.db();
        const response = await db.collection("courses").find({}).toArray();
        console.log("-courses response:", response);
        return NextResponse.json({ response }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
} 