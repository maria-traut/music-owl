import mongoose from "mongoose";

const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  birth_year: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  photo_url: { type: String, default: "/placeholder.jpg" },
});

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);

export default Person;
