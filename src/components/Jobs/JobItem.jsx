import defaultImage from "../../assets/default_img.jpg";

const JobItem = ({job}) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <figure className="h-48 overflow-hidden">
        <img
          src={job.images.length > 0 ? job.images[0].image : defaultImage}
          alt={job.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base-800 font-medium link link-hover">
          {job.name}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg text-base-900">
            From ${job.price}
          </span>
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
