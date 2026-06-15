import dbConnect from "@/db/connect";
import Playlist from "@/db/models/Playlist";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const { personId } = request.query;
      const playlists = personId
        ? await Playlist.find({ person_id: personId })
        : await Playlist.find();
      return response.status(200).json(playlists);
    }
  } catch (error) {
    return response.status(500).json({
      status: "Something went wrong. Please try again.",
    });
  }
  response.status(405).json({ status: "Method not allowed" });
}
