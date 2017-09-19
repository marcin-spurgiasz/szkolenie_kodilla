import Lane from '../models/lane';
import cuid from 'cuid';

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];

  newLane.id = cuid();
  newLane.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ lane: saved });
  });
}

export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ lanes });
  });
}

export function deleteLane(req, res) {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      return res.status(500).send(err);
    }

    lane.remove(() => {
      res.status(200).end();
    });
  });
}

export function editLane(req, res) {
  Lane.update({ id: req.params.id }, req.body.lane).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lane });
  });
}
