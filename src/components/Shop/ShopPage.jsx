import {useState} from "react";
import JobList from "./JobList";
import Pagination from "./Pagination";
import useFetchJobs from "../../hooks/useFetchJobs";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const {jobs, loading, totalPages} = useFetchJobs(
    currentPage,
    priceRange,
    selectedCategory
  );

  const categories = useFetchCategories();

  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8">
      <h1 className="text-3xl font-bold">All Jobs</h1>
      <FilterSection
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={setSelectedCategory}
      />
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
