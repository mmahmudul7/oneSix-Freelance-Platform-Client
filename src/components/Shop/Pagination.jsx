const Pagination = ({totalPages, currentPage, handlePageChange}) => {
  const pageLimit = 5;
  let startPage = Math.max(currentPage - Math.floor(pageLimit / 2), 1);
  let endPage = startPage + pageLimit - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - pageLimit + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center my-6 items-center gap-1">
      {/* Prev button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-base-200 text-base-content disabled:opacity-50 hover:bg-base-300 transition-colors"
      >
        Prev
      </button>

      {/* First page */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className={`px-3 py-1 rounded transition-colors ${
              currentPage === 1
                ? "bg-primary text-white"
                : "bg-base-200 text-base-content hover:bg-base-300"
            }`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 text-base-content">...</span>}
        </>
      )}

      {/* Main pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 rounded transition-colors ${
            currentPage === page
              ? "bg-primary text-white"
              : "bg-base-200 text-base-content hover:bg-base-300"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-base-content">...</span>
          )}
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-3 py-1 rounded transition-colors ${
              currentPage === totalPages
                ? "bg-primary text-white"
                : "bg-base-200 text-base-content hover:bg-base-300"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-base-200 text-base-content disabled:opacity-50 hover:bg-base-300 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
