interface PaginationProps {
  page: number
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPages: number
}

export default function Pagination({
  page,
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  return (
    <nav className="flex items-center justify-between py-4">
      <div>
        <p className="text-sm text-gray-700">
          Página
          <span className="font-medium"> {currentPage} </span>
          de
          <span className="font-medium"> {totalPages} </span>
        </p>
      </div>

      <ul className="inline-flex items-center -space-x-px">
        <button
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => setCurrentPage(1)}
        >
          <span className="sr-only">Primeira</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
          </svg>
        </button>

        <li>
          <button className="z-10 bg-roxo-roxo2 bg-opacity-10 border-roxo-roxo2 text-azul-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            {page}
          </button>
        </li>

        <button
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={() => setCurrentPage(2)}
        >
          <span className="sr-only">Última</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
          </svg>
        </button>
      </ul>
    </nav>
  )
}
