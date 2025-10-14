const Testimonials = () => {
  const reviews = [
    {
      name: "Aminul Islam",
      text: "Onesix helped me land my first 5 clients within a month! Great platform.",
    },
    {
      name: "Mahmud Hasan",
      text: "Easy to use, transparent payments, and supportive community!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">What our users say</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {reviews.map((r, i) => (
          <div key={i} className="card bg-gray-200 shadow-md">
            <div className="card-body">
              <p className="italic">{r.text}</p>
              <h4 className="mt-4 font-semibold">– {r.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
