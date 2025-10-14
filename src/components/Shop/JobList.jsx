import JobItem from "../Jobs/JobItem";

const JobList = ({jobs, loading}) => {
  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-ring loading-xl text-primary"></span>
      </div>
    );

  if (jobs.length === 0)
    return (
      <div className="flex justify-center items-center py-20 text-gray-500">
        No jobs found.
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {jobs.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
