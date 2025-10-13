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
      <div className="card-body items-center text-center">
        <h2 className="card-title">{job.name}</h2>
        <h3 className="font-bold text-xl text-green-700">${job.price}</h3>
        <p>{job.description}</p>
        <div className="card-actions mt-1">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
