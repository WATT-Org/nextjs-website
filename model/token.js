const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  token: { type: String, required: true },
  created: { type: Date, default: Date.now() },
});

export default mongoose.models.Token || mongoose.model("Token", TokenSchema);
