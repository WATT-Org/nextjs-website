const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  verified: { type: Boolean, default: false },

  fname: { type: String, required: true },
  lname: { type: String, required: true },
  bio: { type: String },

  dob: { type: Date },
  addressPermanent: { type: String },
  addressCorresponding: { type: String },

  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
