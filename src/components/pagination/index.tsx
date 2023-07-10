import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin'
import { BlockLike } from 'typescript'

// types
interface PaginationProps {
  totalPages: number[]
  currentPage: number
  handleCurrentPage: (item: number, scroll: boolean) => void
}

export function Pagination({
  totalPages,
  handleCurrentPage,
  currentPage,
}: PaginationProps) {
  return (
    <div
      className='flex justify-center items-center font-primary font-normal text-base-title gap-2'
      id='pagination'
    >
      <span className='hidden desktop:flex text-base-title font-primary font-normal'>
        Página
      </span>
      {totalPages.length > 7 && currentPage > 4 && (
        <button
          onClick={() => handleCurrentPage(1, true)}
          type='button'
          className='flex justify-center items-center font-primary font-normal py-1 px-3 text-base-title hover:text-blue-dark'
        >
          ...
        </button>
      )}
      {totalPages.length <= 6 &&
        totalPages.map((page) => {
          return (
            <button
              key={page}
              onClick={() => handleCurrentPage(page, true)}
              type='button'
              className={`flex justify-center items-center font-primary font-normal py-1 px-3 ${
                page == currentPage
                  ? 'text-blue-dark border border-blue-dark rounded-md'
                  : 'text-base-title hover:text-blue-dark'
              }`}
            >
              {page}
            </button>
          )
        })}
      {totalPages.length > 6 &&
        totalPages.map((page) => {
          if (page >= currentPage - 3 && page <= currentPage + 3)
            return (
              <button
                key={page}
                onClick={() => handleCurrentPage(page, true)}
                type='button'
                className={`flex justify-center items-center font-primary font-normal py-1 px-3 ${
                  page == currentPage
                    ? 'text-blue-dark border border-blue-dark rounded-md'
                    : 'text-base-title hover:text-blue-dark'
                }`}
              >
                {page}
              </button>
            )
        })}
      {totalPages.length > 7 && currentPage <= totalPages.length - 4 && (
        <button
          onClick={() => handleCurrentPage(totalPages.length, true)}
          type='button'
          className='flex justify-center items-center font-primary font-normal py-1 px-3 text-base-title hover:text-blue-dark'
        >
          ...
        </button>
      )}
    </div>
  )
}
