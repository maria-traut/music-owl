import dbConnect from "@/db/connect";
import ScientificFinding from "@/db/models/ScientificFinding";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const scientificFinding = await ScientificFinding.findById(id);

    if (!scientificFinding) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(scientificFinding);
  }
}
