import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;
  let { db } = await connectToDatabase();

  if (method === "GET") {
    const dreamDetails = await db
      .collection("dreamItems")
      .find({ _id: new ObjectId(id as string) })
      .toArray();
    res.status(200).json({ data: dreamDetails[0] });
  }

  if (method === "POST") {
    const newItem = req.body;
    db.collection("dreamItems").insertOne(newItem, function (err, res) {
      if (err) {
        console.log("ERROR", err);
        throw err;
      }
      console.log("1 Item inserted");
    });
    res.status(200).send({ message: "Dream added successfully" });
  }

  // if (method === "PUT") {
  //   const dreamList = await db.collection("users").find().toArray();
  //   res.status(200).json({ data: dreamList });
  // }
}
