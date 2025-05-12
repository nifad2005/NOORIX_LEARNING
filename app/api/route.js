
import clientPromise from "../../libs/database/authDB";
import { NextResponse } from "next/server";
 
export const POST = async (req) => {
    console.log("Request received to set role");
    const body = await req.json();
    const { role,email } = await body;
    if (!["creator", "learner"].includes(role)) {
        console.log("Roles :", role);
        return NextResponse.json({ message: "Role is required" }, { status: 400 });
    }
    
    console.log("Role :", role);
    const client = await clientPromise;
    const db = client.db()

    const userData = await db.collection("users").updateOne(
        {
            email
        },{
            $set:{
                role:role
            }
        }
    )
    console.log("User data updated :", userData);

    return NextResponse.json({ successful: true, role }, { status: 200 });
}