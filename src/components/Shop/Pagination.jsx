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
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        Prev
      </button>

      {/* First page */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className={`px-3 py-1 rounded ${
              currentPage === 1 ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {/* Main pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-primary text-white"
                : "bg-gray-200"
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
        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
