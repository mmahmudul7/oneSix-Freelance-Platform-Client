import {useState} from "react";

const HeroSearch = ({onSearch}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="mt-6 w-full max-w-lg flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search jobs..."
        className="flex-1 p-3 rounded-l-lg bg-base-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 outline-none shadow-sm transition duration-200"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-5 rounded-r-lg shadow-md transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default HeroSearch;
