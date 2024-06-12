import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const playerSchema = new Schema(
  {
    playerImage: {
      type: String, // cloudinary url
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    isCaptain: {
      type: Boolean,
      default: false,
    },

    matches: {
      type: Number,
      default: 0,
    },
    innings: {
      type: Number,
      default: 0,
    },
    runs: {
      type: Number,
      default: 0,
    },
    ballsFaced: {
      type: Number,
      default: 0,
    },
    fours: {
      type: Number,
      default: 0,
    },
    sixes: {
      type: Number,
      default: 0,
    },
    wickets: {
      type: Number,
      default: 0,
    },
    isRetired: {
      type: Boolean,
      default: false,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  { timestamps: true }
);

playerSchema.plugin(mongooseAggregatePaginate);

export const Player = mongoose.model("Player", playerSchema);
