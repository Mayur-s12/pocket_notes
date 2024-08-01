import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
