import { NextResponse } from "next/server";
import clientPromise from "../../../../libs/database/authDB";


export const POST = async(req)=>{
    const body = await req.json();
    try {
        const client =  await clientPromise
        const db = client.db();
        const response = await db.collection("courses").insertOne(body);
        console.log("-coruse response:", response);
        return NextResponse.json({ message: "success" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }

}