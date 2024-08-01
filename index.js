import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import groupRoutes from "./routes/groups.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

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

app.use("/api", groupRoutes);

app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
