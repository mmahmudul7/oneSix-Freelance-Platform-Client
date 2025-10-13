import {useEffect, useState} from "react";
import apiClient from "../../services/api-client";
import JobList from "./JobList";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/jobs/?page=${currentPage}`);
      const data = await response.data;

      setJobs(data.results);
      setTotalPages(Math.ceil(data.count / 9));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <JobList jobs={jobs} loading={loading} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
