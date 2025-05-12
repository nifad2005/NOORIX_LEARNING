import { NextResponse } from "next/server";
import clientPromise from "../../../../libs/database/authDB";
import { ObjectId } from "mongodb";

export const GET = async(request, {params})=>{
    try{
        const client = await clientPromise
        const db = client.db();
        const {id} = await params
        console.log(id);
        const response = await db.collection("courses").findOne({_id:new ObjectId(id)})
        return NextResponse.json({ response}, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}