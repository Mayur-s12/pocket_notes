import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas", error);
  });

export default app;
