// Placeholder data
let trailers = [
  { id: 1, number: 'T100', location: 'Dock A', loadStatus: 'loaded' }
];

exports.getTrailers = (req, res) => {
  res.json(trailers);
};

exports.updateTrailer = (req, res) => {
  const { id, location, loadStatus } = req.body;
  const trailer = trailers.find(t => t.id === id);
  if (trailer) {
    trailer.location = location;
    trailer.loadStatus = loadStatus;
    res.json(trailer);
  } else {
    res.status(404).json({ message: 'Trailer not found' });
  }
};
