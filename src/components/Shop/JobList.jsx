import JobItem from "../Jobs/JobItem";

const JobList = ({jobs, loading}) => {
  if (loading)
    return (
      <div className="flex justify-center items-center py-10 min-h-screen">
        <span className="loading loading-ring loading-xl text-primary"></span>
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {jobs.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
