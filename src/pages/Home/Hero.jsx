const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.postimg.cc/QdhLMRy6/onesix-hero.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            Freelance Marketplace for Hiring Professionals
          </h1>
          <p className="mb-5"></p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
