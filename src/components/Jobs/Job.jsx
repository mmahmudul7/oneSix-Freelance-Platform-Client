import {useEffect, useState} from "react";
import JobItem from "./JobItem";
import {SwiperSlide, Swiper} from "swiper/react";
import {Navigation} from "swiper/modules";

// Import Swiper styles
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
    <section className="bg-gray-50">
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">All Jobs</h2>
          <a
            href="#"
            className="btn btn-primary px-6 py-6 rounded-full text-lg"
          >
            View All
          </a>
        </div>
        {/* Spinner  */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-ring loading-xl text-primary"></span>
          </div>
        )}

        {error && <ErrorAlert error={error} />}

        {/* Job Slider  */}
        {!isLoading && !error && jobs.length > 0 && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {slidesPerView: 2},
              1024: {slidesPerView: 3},
            }}
            navigation
            className="mt-4 px-4 container"
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id} className="flex justify-center">
                <JobItem key={job.id} job={job} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!isLoading && !error && jobs.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No Jobs Available</p>
        )}
      </div>
    </section>
  );
};

export default Job;
