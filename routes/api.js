const express = require("express");
const { deleteOne } = require("../models/note");
const router = express.Router();
const Note = require("../models/note");

router.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content,
  });
  newNote.save();
});

router.get("/notes", (req, res) => {
  Note.find().then((notes) => res.json(notes));
});

router.delete("/notes/:id", (req, res) => {
  Note.findByIdAndDelete({ _id: req.params.id }).then((note) => {
    console.log(`${note._id} deleted`);
  });
});

router.put("/update", (req, res) => {
  const { id, title: uptitle, content: upcontent } = req.body;
  Note.findByIdAndUpdate(id, { title: uptitle, content: upcontent })
    .then(() => {
      res.send("updated succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
