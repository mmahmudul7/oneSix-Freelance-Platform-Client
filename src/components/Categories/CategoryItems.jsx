import {CgMoveTask} from "react-icons/cg";

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
  const buttonText = isDark
    ? "text-white hover:text-slate-200"
    : "text-blue-600 hover:text-blue-700";

  return (
    <div
      className={`
        rounded-xl overflow-hidden 
        shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer
        bg-gradient-to-br ${gradients[index % gradients.length]}
        hover:scale-[1.03] hover:from-opacity-100 hover:to-opacity-100
      `}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-sm">
            {category.name.charAt(0)}
          </div>
          <span className={`text-sm px-2 py-1 rounded-full ${badgeBg}`}>
            {category.job_count} items
          </span>
        </div>

        {/* Title + Description */}
        <h3 className={`text-xl font-bold mb-2 ${textPrimary}`}>
          {category.name}
        </h3>
        <p className={`text-sm mb-4 flex-grow ${textSecondary}`}>
          {category.description}
        </p>

        {/* Button */}
        <button
          className={`font-semibold transition-colors flex items-center gap-1 ${buttonText}`}
        >
          Explore <CgMoveTask className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;
