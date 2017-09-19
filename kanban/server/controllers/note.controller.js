import Note from '../models/note';
import Lane from '../models/lane';
import cuid from 'cuid';

export function addNote(req, res) {
  if (!req.body.task) {
    res.status(403).end();
  }

  const newNote = new Note(req.body);

  newNote.id = cuid();
  newNote.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    Lane.findOne({ id: req.params.laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      return res.status(500).send(err);
    }

    note.remove(() => {
      res.status(200).end();
    });
  });
}

export function editNote(req, res) {
  Lane.update({ id: req.params.id }, req.body.note).exec((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ note });
  });
}
