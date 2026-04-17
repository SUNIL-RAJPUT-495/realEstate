import mongoose from "mongoose";

const appraisalSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      trim: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    suburbPostcode: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: String,
      required: true,
    },
    bathrooms: {
      type: String,
      required: true,
    },
    carSpaces: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: String,
    },
  },
  { timestamps: true }
);

const Appraisal = mongoose.model("Appraisal", appraisalSchema);
export default Appraisal;
