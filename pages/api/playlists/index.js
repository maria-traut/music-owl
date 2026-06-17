import dbConnect from "@/db/connect";
import Playlist from "@/db/models/Playlist";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const { personId } = request.query;

      const query = personId
        ? { person_id: new mongoose.Types.ObjectId(personId) }
        : {};
      const playlists = await Playlist.find(query);
      return response.status(200).json(playlists);
    }

    if (request.method === "POST") {
      const { playlist_title, person_id, songs } = request.body;
      if (!playlist_title || !person_id || !songs?.length) {
        return response
          .status(400)
          .json({ status: "Missing required fields." });
      }
      const playlist = await Playlist.create(request.body);
      return response
        .status(201)
        .json({ status: "Playlist created.", playlist });
    }
  } catch (error) {
    console.error("Error:", error);
    return response
      .status(500)
      .json({ status: "Something went wrong. Please try again." });
  }

  response.status(405).json({ status: "Method not allowed" });
}
