import express from "express";
import Group from "../models/Group.js";

const router = express.Router();

// Create a new group
router.post("/groups", async (req, res) => {
  const { name, color } = req.body;
  try {
    const group = new Group({
      name,
      color,
    });
    await group.save();
    res.status(201).send(group);
  } catch (error) {
    res.status(500).send({ error: "Error creating group" });
  }
});

// Get all groups
router.get("/groups", async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).send({ error: "Error fetching groups" });
  }
});

export default router;
