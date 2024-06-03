import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "rms",
    });
    console.log("Connected to daAtabase!");
  } catch (err) {
    console.log(`Some error occurred while connecting to database: ${err}`);
  }
};
