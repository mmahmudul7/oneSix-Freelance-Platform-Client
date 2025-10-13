const CategoryItems = ({index, category}) => {
  const gradients = [
    "from-emerald-200 to-cyan-300",
    "from-teal-200 to-sky-300",
    "from-cyan-200 to-blue-300",
    "from-sky-300 to-indigo-400",
    "from-blue-300 to-violet-400",
  ];

  // Light vs slightly dark gradient tone detect
  const isDark =
    gradients[index % gradients.length].includes("indigo") ||
    gradients[index % gradients.length].includes("violet");

  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-100" : "text-gray-700";
  const badgeBg = isDark
    ? "bg-white/20 text-slate-100"
    : "bg-white/70 text-gray-600";

  return (
    <div
      className={`
        rounded-xl overflow-hidden 
        shadow-sm hover:shadow-lg transition-all duration-100 cursor-pointer
        bg-gradient-to-br ${gradients[index % gradients.length]}
        hover:scale-[1.03] hover:from-opacity-100 hover:to-opacity-100
      `}
    >
      <div className="pt-3 pr-4 pb-4 pl-4 flex flex-col">
        {/* Title + Description */}
        <h3 className={`text-xl font-bold mb-1 ${textPrimary}`}>
          {category.name}
        </h3>
        <p className={`text-sm mb-2 flex-grow ${textSecondary}`}>
          {category.description}
        </p>
        <div>
          <span className={`text-sm px-3 py-0.5 rounded-full ${badgeBg}`}>
            {category.job_count} Jobs
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
