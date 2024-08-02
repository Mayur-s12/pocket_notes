import express from "express";
import Note from "../models/Notes.js";

const router = express.Router();

// Create a new note
router.post("/notes", async (req, res) => {
  const { content, groupId } = req.body;
  console.log(req.body);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("Content-Type:", req.get("Content-Type"));
  console.log("Content:", content);
  console.log("GroupId:", groupId);
  try {
    const note = new Note({
      content,
      groupId,
    });
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(500).send({ error: "Error creating note" });
  }
});

// Get notes by groupId
router.get("/notes/:groupId", async (req, res) => {
  const { groupId } = req.params;
  try {
    const notes = await Note.find({ groupId }).sort({ createdAt: -1 });
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ error: "Error fetching notes" });
  }
});

export default router;
