import axios from "axios";
import {useEffect, useState} from "react";
import JobItem from "./JobItem";
import {SwiperSlide, Swiper} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/jobs/")
      .then((res) => setJobs(res.data.results));
  }, []);
  return (
    <section className="mx-auto py-16 bg-gray-50">
      <div className="flex justify-between items-center px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">All Jobs</h2>
        <a href="#" className="btn btn-primary px-6 py-6 rounded-full text-lg">
          View All
        </a>
      </div>
      {/* Job Slider  */}
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
    </section>
  );
};

export default Job;
