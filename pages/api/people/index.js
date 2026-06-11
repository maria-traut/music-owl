import dbConnect from "@/db/connect";
import Person from "@/db/models/Person";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const people = await Person.find();
      return response.status(200).json(people);
    }
  } catch (error) {
    return response.status(500).json({
      status: "Could not fetch people data.",
    });
  }
  response.status(405).json({ message: "Method not allowed" });
}
