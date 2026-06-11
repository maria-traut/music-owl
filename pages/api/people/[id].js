import dbConnect from "@/db/connect";
import Person from "@/db/models/Person";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "GET") {
      const person = await Person.findById(id);

      if (!person) {
        return response.status(404).json({ status: "Person not found" });
      }
      response.status(200).json(person);
    }
  } catch (error) {
    return response.status(500).json({
      status: "Internal Server Error",
    });
  }
  response.status(405).json({ status: "Method not allowed" });
}
