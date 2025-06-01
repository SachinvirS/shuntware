// Placeholder data
let jobs = [
  { id: 1, trailer: 'T100', from: 'Dock A', to: 'Dock B', assignedTo: 'Shunter1', status: 'pending' }
];

exports.getJobs = (req, res) => {
  res.json(jobs);
};

exports.createJob = (req, res) => {
  const { trailer, from, to, assignedTo } = req.body;
  const newJob = { id: jobs.length + 1, trailer, from, to, assignedTo, status: 'pending' };
  jobs.push(newJob);
  res.json(newJob);
};
