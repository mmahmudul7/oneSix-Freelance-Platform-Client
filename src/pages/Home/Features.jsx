import {Code, Users, Rocket} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Code size={40} />,
      title: "For Developers",
      desc: "Find real projects that match your skills.",
    },
    {
      icon: <Users size={40} />,
      title: "For Clients",
      desc: "Hire vetted experts with ease.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Grow Fast",
      desc: "Build your reputation and earn more.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Onesix?</h2>
        <p className="text-gray-500 mt-2">
          Empowering freelancers & clients equally
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all"
          >
            <div className="card-body items-center text-center">
              {f.icon}
              <h3 className="card-title mt-4">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
