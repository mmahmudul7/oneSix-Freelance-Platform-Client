const FilterSection = ({
  priceRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  searchQuery,
  handleSearchQuery,
  sortOrder,
  handleSorting,
}) => {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Price Range */}
      <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
        <label className="block text-sm font-medium text-base-content mb-2">
          Price Range
        </label>

        <div className="flex items-center space-x-4 mb-2">
          {/* Min Price Input */}
          <input
            type="number"
            min="1"
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) => {
              const val = Math.min(
                Math.max(Number(e.target.value), 1),
                priceRange[1]
              );
              handlePriceChange(0, val);
            }}
            className="w-20 p-2 border rounded-md border-base-300 bg-base-100 text-base-content"
          />
          {/* Min Price Range */}
          <input
            type="range"
            min="1"
            max={priceRange[1]}
            step="1"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(0, Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>

        <div className="flex items-center space-x-4">
          {/* Max Price Input */}
          <input
            type="number"
            min={priceRange[0]}
            max="1000"
            value={priceRange[1]}
            onChange={(e) => {
              const val = Math.max(
                Math.min(Number(e.target.value), 1000),
                priceRange[0]
              );
              handlePriceChange(1, val);
            }}
            className="w-20 p-2 border rounded-md border-base-300 bg-base-100 text-base-content"
          />
          {/* Max Price Range */}
          <input
            type="range"
            min={priceRange[0]}
            max="1000"
            step="1"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
        <label className="block text-sm font-medium text-base-content mb-2">
          Category
        </label>
        <select
          className="w-full p-2 border rounded-md border-base-300 bg-base-100 text-base-content"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
        <label className="block text-sm font-medium text-base-content mb-2">
          Search
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder="Search jobs ..."
          className="w-full p-2 border rounded-md border-base-300 bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Sorting */}
      <div className="bg-base-100 p-4 rounded-lg shadow border border-base-300">
        <label className="block text-sm font-medium text-base-content mb-2">
          Sort by Price
        </label>
        <select
          className="w-full p-2 border rounded-md border-base-300 bg-base-100 text-base-content"
          value={sortOrder}
          onChange={(e) => handleSorting(e.target.value)}
        >
          <option value="">Default</option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
