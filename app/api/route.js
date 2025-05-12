import { getServerSession } from "next-auth";
import clientPromise from "../../libs/database/authDB";
import {authOptions} from "../api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
 
export const POST = async (req) => {
    console.log("Request received to set role");
    

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { role } = await body;
    if (!["creator", "learner"].includes(role)) {
        console.log("Roles :", role);
        return NextResponse.json({ message: "Role is required" }, { status: 400 });
    }
    console.log("Session :", session);
    console.log("Role :", role);
    const client = await clientPromise;
    const db = client.db()

    const userData = await db.collection("users").updateOne(
        {
            email:session.user.email
        },{
            $set:{
                role:role
            }
        }
    )
    console.log("User data updated :", userData);

    return NextResponse.json({ successful: true, userData: {...session.user,role} }, { status: 200 });
}