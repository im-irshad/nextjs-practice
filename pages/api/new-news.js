import { MongoClient, mongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, source, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://dbuser:abbasi123@cluster0.kxlpl.mongodb.net/NewsDb?retryWrites=true&w=majority"
    );
    const db = client.db();
    const newsCollection = db.collection("News");
    const result = await newsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "news inserted" });
  }
}
export default handler;
