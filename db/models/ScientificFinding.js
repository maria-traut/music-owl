import mongoose from "mongoose";

const { Schema } = mongoose;

const scientificFindingSchema = new Schema({
  title: { type: String, required: true },
  title_en: { type: String, required: true },
  category: { type: String, required: true },
  finding: { type: String, required: true },
  finding_en: { type: String, required: true },
  authors: {
    type: [String],
    validate: {
      validator: (v) => v.length > 0,
      message: "At least one author is required.",
    },
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  study_title: { type: String, required: true },
  publisher: { type: String, required: true },
  tags: { type: [String], default: [] },
});

const ScientificFinding =
  mongoose.models.ScientificFinding ||
  mongoose.model(
    "ScientificFinding",
    scientificFindingSchema,
    "scientific_findings"
  );

export default ScientificFinding;
