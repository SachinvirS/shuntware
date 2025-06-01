import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data));

    fetch('/api/trailers')
      .then((res) => res.json())
      .then((data) => setTrailers(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">Jobs</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                {job.trailer}: {job.from} → {job.to} ({job.status})
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">Trailers</h2>
          <ul>
            {trailers.map((trailer) => (
              <li key={trailer.id}>
                {trailer.number}: {trailer.location} ({trailer.loadStatus})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
