import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import apiClient from "../../services/api-client";
import CategoryItems from "./CategoryItems";
import ErrorAlert from "../ErrorAlert";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 border-t border-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-base-800 tracking-tight">
            Browse Categories
          </h2>
          <Link
            to="/jobs"
            className="btn btn-primary mt-4 md:mt-0 px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            View All
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-40 rounded-xl bg-blue-600 animate-pulse"
              ></div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && <ErrorAlert error={error} />}

        {/* Category Grid */}
        {!loading && !error && categories.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryItems
                key={category.id}
                index={index}
                category={category}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && categories.length === 0 && (
          <p className="text-center text-base-500 mt-6">No categories found.</p>
        )}
      </div>
    </section>
  );
};

export default Category;
