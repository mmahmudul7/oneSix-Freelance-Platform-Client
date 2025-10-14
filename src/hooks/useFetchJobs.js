import {useEffect, useState} from "react";
import apiClient from "../services/api-client";

const useFetchJobs = (
  currentPage,
  priceRange,
  selectedCategory,
  searchQuery
) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      const url = `/jobs/?keyword=&category=${selectedCategory}&min_price=${priceRange[0]}&max_price=${priceRange[1]}&page=${currentPage}&search=${searchQuery}`;
      try {
        const response = await apiClient.get(url);
        const data = await response.data;

        setJobs(data.results);
        setTotalPages(Math.ceil(data.count / 12));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [currentPage, priceRange, selectedCategory, searchQuery]);

  return {jobs, loading, totalPages};
};

export default useFetchJobs;
