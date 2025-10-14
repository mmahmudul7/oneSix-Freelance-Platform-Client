import {useEffect, useState} from "react";
import JobItem from "./JobItem";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/jobs/")
      .then((res) => setJobs(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-purple-50 to-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800">
            Featured Jobs
          </h2>
          <Link
            to="/jobs"
            className="btn btn-primary px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            View All
          </Link>
        </div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 h-72 rounded-xl"
              ></div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && <ErrorAlert error={error} />}

        {/* Swiper Slider */}
        {!isLoading && !error && jobs.length > 0 && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {slidesPerView: 2},
              1024: {slidesPerView: 4},
            }}
            navigation
            loop={true}
            speed={600}
            grabCursor={true}
            className="mt-6"
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id} className="flex justify-center">
                <JobItem job={job} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Empty State */}
        {!isLoading && !error && jobs.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <img
              src="/no-data.svg"
              alt="No jobs"
              className="mx-auto w-40 opacity-70 mb-4"
            />
            <p>No jobs available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Job;
