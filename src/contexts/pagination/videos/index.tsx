'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'

// types
interface ContextType {
  totalPages: number[]
  totalItems: number
  itemsPerPage: number
  currentPage: number
  handleCurrentPage: (item: number) => void
  controlList: (item: number) => void
}

export const PaginationContext = createContext({} as ContextType)

export function PaginationVideosSelect({ children }: { children: ReactNode }) {
  const [totalPages, setTotalPages] = useState<number[]>([1])
  const [totalItems, setTotalItems] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const itemsPerPage = 9

  useEffect(() => {
    if (totalItems > 0) {
      const total = Array.from(
        { length: Math.ceil(totalItems / itemsPerPage) },
        (_, i) => i + 1,
      )
      setTotalPages(total)
    }
  }, [totalItems])

  function handleCurrentPage(page: number) {
    setCurrentPage(page)
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    })
  }

  function controlList(item: number) {
    setTotalItems(item)
  }

  return (
    <PaginationContext.Provider
      value={{
        totalPages,
        totalItems,
        itemsPerPage,
        currentPage,
        handleCurrentPage,
        controlList,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}
