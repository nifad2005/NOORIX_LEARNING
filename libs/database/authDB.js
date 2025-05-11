import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();
console.log("MongoDB client promise created");
export default clientPromise;
