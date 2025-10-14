import Category from "../../components/Categories/Category";
import Job from "../../components/Jobs/Job";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Job />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
