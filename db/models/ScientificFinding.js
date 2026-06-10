import mongoose from "mongoose";

const { Schema } = mongoose;

const scientificFindingSchema = new Schema({
  title: { type: String, required: true },
  title_en: { type: String, required: true },
  category: { type: String, required: true },
  finding: { type: String, required: true },
  finding_en: { type: String, required: true },
  authors: { type: [String], required: true },
  year: { type: Number, required: true },
  source: { type: String, required: true },
  publisher: { type: String, required: true },
  tags: { type: [String] },
});

const ScientificFinding =
  mongoose.models.ScientificFinding ||
  mongoose.model("ScientificFinding", scientificFindingSchema);

export default ScientificFinding;
