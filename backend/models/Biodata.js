import mongoose from "mongoose";

const biodataSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,

    personal: {
      name: String,
      gender: String,
      dob: Date,
      age: Number,
      height: String,
      religion: String,
      caste: String
    },

    family: {
      father: String,
      mother: String,
      siblings: String,
      nativePlace: String
    },

    education: {
      qualification: String,
      profession: String,
      income: String
    },

    horoscope: {
      rashi: String,
      nakshatra: String,
      gotra: String
    },

    photo: String,

    template: String,
    privacy: {
      hideContact: Boolean,
      hideIncome: Boolean
    }
  },
  { timestamps: true }
);

export default mongoose.model("Biodata", biodataSchema);