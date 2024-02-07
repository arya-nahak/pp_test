import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  pageSize,
  pageCount,
  currentPage,
  setCurrentPage,
  handlePageChange,
  currentData,
  searchTerm,
  totalPages,
}) {
  const handleprevPage = () => {
    if (currentPage > 1) {
      let prevPage = currentPage - 1;
      setCurrentPage(prevPage);
    }
  };
  const handlenextPage = () => {
    if (totalPages > currentPage) {
      let nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };
  
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <p
          onClick={handleprevPage}
          className={`${currentPage} relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Previous
        </p>
        <p
          onClick={handlenextPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </p>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div></div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <p
              onClick={handleprevPage}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </p>
            {Array.from({ length: totalPages }, (_, index) => (
              <div key={index + 1}>
                <p
                  aria-current="page"
                  className={`${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white hover:text-gray-700 "
                      : "bg-white text-gray-700 hover:text-gray-700 "
                  } relative z-10 inline-flex items-center  border border-gray-300  px-4 py-2 text-sm font-medium font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </p>
              </div>
            ))}
            <p
              onClick={handlenextPage}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
}
