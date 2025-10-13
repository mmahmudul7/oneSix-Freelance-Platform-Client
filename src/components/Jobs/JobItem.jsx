import defaultImage from "../../assets/default_img.jpg";

const JobItem = ({job}) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={job.images.length > 0 ? job.images[0].image : defaultImage} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-700 font-normal link link-hover">
          {job.name}
        </h2>
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">Form ${job.price}</h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
