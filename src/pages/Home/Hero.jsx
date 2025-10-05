const Hero = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.postimg.cc/QdhLMRy6/onesix-hero.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Freelance Marketplace for Hiring Professionals
          </h1>
          <p className="py-6">
            Connect with top clients, showcase your skills, and grow your
            income. A modern freelance marketplace built for tech professionals.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
