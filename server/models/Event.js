const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Event name is required"],
      trim: true
    },
    date: {
      type: Date,
      required: [true, "Event date is required"]
    },
    time: {
      type: String,
      required: [true, "Event time is required"]
    },
    venue: {
      type: String,
      required: [true, "Event venue is required"],
      trim: true
    },
    organizer: {
      type: String,
      required: [true, "Organizer name is required"],
      trim: true
    },
    participants: {
      type: [String],
      default: []
    },
    description: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Event", eventSchema);
