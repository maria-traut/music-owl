import dbConnect from "@/db/connect";
import ScientificFinding from "@/db/models/ScientificFinding";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const scientificFindings = await ScientificFinding.find();
    return response.status(200).json(scientificFindings);
  } else {
    return response.status(405).json({ message: "Mehotd not allowed" });
  }
}
