import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  let { db } = await connectToDatabase();

  if (method === "GET") {
    const dreamList = await db.collection("users").find().toArray();
    res.status(200).json({ data: dreamList });
  }

  if (method === "POST") {
    const newUser = req.body;
    db.collection("users").insertOne(newUser, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });
    res.status(200).send({ message: "User added successfully" });
  }

  // if (method === "PUT") {
  //   const dreamList = await db.collection("users").find().toArray();
  //   res.status(200).json({ data: dreamList });
  // }
}
