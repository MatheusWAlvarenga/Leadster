'use client'
// vendors
import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import wait from 'waait'

// components
import { PrimaryBoard } from '@/components/boards/primary'
import { SecondBoard } from '@/components/boards/second'
import { ButtonsBar } from '@/components/buttons/buttonsBar'
import { Card } from '@/components/card'

// videos
import { videoList, VideoListType } from '../../public/videos'

// types
type SelectType = {
  value: string
  label: string
}

type ButtonsBarOptionsType = {
  id: number
  name: string
  selected: boolean
}

export default function Home() {
  const [list, setList] = useState<VideoListType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [allPage, setAllPage] = useState<number[]>([1])
  const [sortBy, setSortBy] = useState<string>('created_at')
  const [type, setType] = useState<number>(4)

  const itemsPerPage = 9

  function handleSelectionFilter(
    sortBy: SelectType,
    buttonSelected: ButtonsBarOptionsType | undefined,
  ) {
    setCurrentPage(1)
    setSortBy(sortBy.value)
    setType(buttonSelected ? buttonSelected.id : 4)
  }

  useEffect(() => {
    if (list.length) {
      const total = Array.from(
        { length: Math.ceil(list.length / itemsPerPage) },
        (_, i) => i + 1,
      )
      setAllPage(total)
    }
  }, [list, sortBy, type])

  useEffect(() => {
    let newList = videoList()

    let test: VideoListType[] = []

    newList.map((item) => {
      if (item.type === type) test.push(item)
    })

    let listSorted = test.sort((a, b) => {
      if (sortBy == 'created_at') {
        const sortA = a.createdAt.getTime()
        const sortB = b.createdAt.getTime()

        return sortA - sortB
      }

      return a.type - b.type
    })

    setList(listSorted)
  }, [sortBy, type])

  async function handleCurrentPage(page: number) {
    setCurrentPage(page)

    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    })
  }

  return (
    <div className='flex flex-col justify-start items-center'>
      <PrimaryBoard />

      <div className='flex flex-col justify-center items-center w-full py-20'>
        <ButtonsBar
          selections={(sortBy, buttonSelected) =>
            handleSelectionFilter(sortBy, buttonSelected)
          }
        />

        {/* grid */}
        <div className='flex w-[80%] flex-col py-12 gap-6 '>
          <div
            id='point'
            className='w-full grid grid-cols-3 gap-8 border-b-2 border-line-dark pb-16'
          >
            {list.length &&
              list.map((card, index) => {
                if (currentPage === 1 && index >= 0 && index < itemsPerPage)
                  return (
                    <Card
                      key={card.id}
                      description={card.description}
                      thumbnail={card.thumbnail}
                    />
                  )
                if (
                  index >= (currentPage - 1) * itemsPerPage &&
                  index < currentPage * itemsPerPage
                )
                  return (
                    <Card
                      key={card.id}
                      description={card.description}
                      thumbnail={card.thumbnail}
                    />
                  )
              })}
          </div>

          {/*  pagination */}
          <div
            className='flex justify-center items-center font-primary font-normal text-base-title gap-2'
            id='pagination'
          >
            <span className='text-base-title font-primary font-normal'>
              Página
            </span>
            {allPage.length > 7 && currentPage > 4 && (
              <button
                onClick={() => handleCurrentPage(1)}
                type='button'
                className='flex justify-center items-center font-primary font-normal py-1 px-3 text-base-title hover:text-blue-dark'
              >
                ...
              </button>
            )}
            {allPage.length <= 6 &&
              allPage.map((page) => {
                return (
                  <button
                    key={page}
                    onClick={() => handleCurrentPage(page)}
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
            {allPage.length > 6 &&
              allPage.map((page) => {
                if (page >= currentPage - 3 && page <= currentPage + 3)
                  return (
                    <button
                      key={page}
                      onClick={() => handleCurrentPage(page)}
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
            {allPage.length > 7 && currentPage <= allPage.length - 4 && (
              <button
                onClick={() => handleCurrentPage(allPage.length)}
                type='button'
                className='flex justify-center items-center font-primary font-normal py-1 px-3 text-base-title hover:text-blue-dark'
              >
                ...
              </button>
            )}
          </div>
        </div>
      </div>

      <SecondBoard />
    </div>
  )
}
