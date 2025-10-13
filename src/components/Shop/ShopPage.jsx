import {useState} from "react";
import JobList from "./JobList";
import Pagination from "./Pagination";
import useFetchJobs from "../../hooks/useFetchJobs";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {jobs, loading, totalPages} = useFetchJobs(currentPage);

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
