import {useEffect, useState} from "react";
import apiClient from "../../services/api-client";
import JobList from "./JobList";

const ShopPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/jobs")
      .then((res) => setJobs(res.data.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <JobList jobs={jobs} loading={loading} />
    </div>
  );
};

export default ShopPage;
