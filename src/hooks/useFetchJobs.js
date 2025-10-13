import {useEffect, useState} from "react";
import apiClient from "../services/api-client";

const useFetchJobs = (currentPage) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
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
    fetchJobs();
  }, [currentPage]);

  return {jobs, loading, totalPages};
};

export default useFetchJobs;
