import dbConnect from "@/db/connect";
import Person from "@/db/models/Person";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const people = await Person.find();
      return response.status(200).json(people);
    }
    if (request.method === "POST") {
      const personData = request.body;
      const newPerson = await Person.create(personData);
      return response
        .status(201)
        .json({ newPerson, status: "Person created." });
    }
  } catch (error) {
    return response.status(500).json({
      status: "Something went wrong. Please try again.",
    });
  }
  response.status(405).json({ status: "Method not allowed" });
}
