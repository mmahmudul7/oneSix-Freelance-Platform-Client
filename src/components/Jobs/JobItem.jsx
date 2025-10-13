import defaultImage from "../../assets/default_img.jpg";

const JobItem = ({job}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-5 pt-5">
        <img
          src={job.images.length > 0 ? job.images[0].image : defaultImage}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-700 font-normal">{job.name}</h2>
        <div className="flex justify-between">
          <h3 className="font-bold text-xl">Form ${job.price}</h3>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
