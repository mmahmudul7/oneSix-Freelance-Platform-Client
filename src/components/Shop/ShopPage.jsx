import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import JobList from "./JobList";
import Pagination from "./Pagination";
import useFetchJobs from "../../hooks/useFetchJobs";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("search") || "";

  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortOrder, setSortOrder] = useState("");

  const {jobs, loading, totalPages} = useFetchJobs(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder
  );

  const categories = useFetchCategories();

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 pb-16 space-y-8 ">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">
          All Jobs
        </h1>
      </div>

      {/* Filter Section */}
      <FilterSection
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={setSelectedCategory}
        handleSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        sortOrder={sortOrder}
        handleSorting={setSortOrder}
      />

      {/* Job List / Loading / Empty */}
      {loading ? (
        <div className="flex justify-center items-center py-20 min-h-[50vh]">
          <span className="loading loading-ring loading-xl text-primary"></span>
        </div>
      ) : jobs.length > 0 ? (
        <JobList jobs={jobs} loading={false} />
      ) : (
        <div className="text-center text-gray-500 py-20 text-lg">
          No jobs found for your search.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-6">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default ShopPage;
