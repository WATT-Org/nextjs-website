import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connection.readyState >= 1) {
    return handler(req, res);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    return handler(req, res);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    res.status(500).json({ error: "Failed to connect to database" });
  }
};

export default connectDb;
