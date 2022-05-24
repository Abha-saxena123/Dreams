import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { user },
  } = req;
  let { db } = await connectToDatabase();

  if (method === "GET") {
    const dreamList = await db
      .collection("dreamItems")
      .find({ firstName: user })
      .toArray();

    res.status(200).json({ data: dreamList });
  }

  if (method === "POST") {
    const newItem = req.body;
    db.collection("dreamItems").insertOne(newItem, function (err, res) {
      if (err) throw err;
      console.log("1 Item inserted");
    });
    res.status(200).send({ message: "User added successfully" });
  }

  // if (method === "PUT") {
  //   const dreamList = await db.collection("users").find().toArray();
  //   res.status(200).json({ data: dreamList });
  // }
}
