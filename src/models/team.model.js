import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
  {
    teamLogo: {
      type: String, //cloudinary
    },
    teamName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    player: [
      {
        type: Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Team = mongoose.model("Team", teamSchema);
