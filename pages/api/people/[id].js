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
      return response.status(200).json(person);
    }

    if (request.method === "PUT") {
      const personData = request.body;
      await Person.findByIdAndUpdate(id, personData);
      
      if (!updatedPerson) {
          return response.status(404).json({ status: "Person not found" });
      }
      
      return response.status(200).json({ status: `Person ${id} updated!` });
    }
  } catch (error) {
    return response.status(500).json({
      status: "Internal Server Error",
    });
  }
  response.status(405).json({ status: "Method not allowed" });
}
