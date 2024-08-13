const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    links: [
      {
        id: {
          type: String,
          required: true,
        },
        platform: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const linkMo = mongoose.model("Links", linkSchema);
module.exports = linkMo;