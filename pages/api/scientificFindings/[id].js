import dbConnect from "@/db/connect";
import ScientificFinding from "@/db/models/ScientificFinding";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "GET") {
      const scientificFinding = await ScientificFinding.findById(id);

      if (!scientificFinding) {
        return response
          .status(404)
          .json({ status: "Scientific finding not found" });
      }
      response.status(200).json(scientificFinding);
    }
  } catch (error) {
    return response.status(500).json({
      status: "Internal Server Error",
    });
  }
  response.status(405).json({ status: "Method not allowed" });
}
