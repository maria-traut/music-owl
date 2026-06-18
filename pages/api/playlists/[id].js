import dbConnect from "@/db/connect";
import Playlist from "@/db/models/Playlist";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "DELETE") {
      await Playlist.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: `Playlist ${id} successfully deleted.` });
    }
  } catch (error) {
    return response.status(500).json({ status: "Internal Server Error" });
  }
  response.status(405).json({ status: "Method not allowed" });
}
