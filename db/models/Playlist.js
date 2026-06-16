import mongoose from "mongoose";

const { Schema } = mongoose;

const songSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, min: 1900 },
    youtube_id: { type: String },
    note: { type: String, maxLength: 300 },
  },
  { _id: false }
);

const playlistSchema = new Schema({
  playlist_title: { type: String, required: true },
  person_id: { type: Schema.Types.ObjectId, ref: "Person", required: true },
  songs: {
    type: [songSchema],
    validate: {
      validator: (songs) => songs.length > 0 && songs.length <= 20,
      message: "A playlist must contain between 1 and 20 songs.",
    },
  },
});

const Playlist =
  mongoose.models.Playlist || mongoose.model("Playlist", playlistSchema);

export default Playlist;
