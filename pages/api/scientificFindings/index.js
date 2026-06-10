import dbConnect from "@/db/connect";
import ScientificFinding from "@/db/models/ScientificFinding";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const scientificFindings = await ScientificFinding.find();
      return response.status(200).json(scientificFindings);
    }
  } catch (error) {
    return response.status(500).json({
      status: "Could not fetch scientific findings.",
    });
  }
  response.status(405).json({ message: "Method not allowed" });
}
