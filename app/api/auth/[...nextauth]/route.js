import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import clientPromise from "@/libs/database/authDB";
import Google from "next-auth/providers/google";



const handler =  NextAuth( {
    providers:[
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    adapter:MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET,
    
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

})

export { handler as GET, handler as POST };