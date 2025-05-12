import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import clientPromise from "@/libs/database/authDB";
import Google from "next-auth/providers/google";



export const authOptions = {
    providers:[
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    adapter:MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET,
    authorization: {
        params:{
            prompt:"select_account",
            access_type:"offline",
            response_type:"code",
        }
    },
    events: {
        signIn: async (message) => {
            console.log("signIn", message);
        },
        signOut: async (message) => {
            console.log("signOut", message);
        },
        createUser: async (message) => {
            console.log("createUser", message);
        },
        updateUser: async (message) => {
            console.log("updateUser", message);
        },
    },

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };