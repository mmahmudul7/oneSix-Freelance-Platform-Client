import defaultImage from "../../assets/default_img.jpg";

const JobItem = ({job}) => {
  return (
    <div className="card bg-base-100 dark:bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <figure className="h-48 overflow-hidden">
        <img
          src={job.images.length > 0 ? job.images[0].image : defaultImage}
          alt={job.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base-content font-medium link link-hover">
          {job.name}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold text-base-content text-lg">
            From ${job.price}
          </span>
          <button className="btn btn-primary btn-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
