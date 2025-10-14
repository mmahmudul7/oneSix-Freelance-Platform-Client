import HeroSearch from "./HeroSearch";
import {useNavigate} from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate(`/jobs?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="hero min-h-[80vh] bg-gray-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/QdhLMRy6/onesix-hero.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Freelance Marketplace for Hiring Professionals
          </h1>
          <p className="py-6">
            Connect with top clients, showcase your skills, and grow your
            income.
          </p>
          <HeroSearch onSearch={handleSearch} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
