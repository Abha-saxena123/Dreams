import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

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

}
