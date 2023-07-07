'use client'
// vendors
import { useEffect, useState, useContext } from 'react'
import 'tailwindcss/tailwind.css'

// components
import { PrimaryBoard } from '@/components/boards/primary'
import { SecondBoard } from '@/components/boards/second'
import { ButtonsBar } from '@/components/buttons/buttonsBar'
import { Card } from '@/components/card'
import { Pagination } from '@/components/pagination'

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

// context
import { PaginationContext } from '@/contexts/pagination/videos'

export default function Home() {
  const {
    currentPage,
    controlList,
    itemsPerPage,
    handleCurrentPage,
    totalPages,
  } = useContext(PaginationContext)
  const [list, setList] = useState<VideoListType[]>([])
  const [sortBy, setSortBy] = useState<string>('created_at')
  const [type, setType] = useState<number>(4)

  function handleSelectionFilter(
    sortBy: SelectType,
    buttonSelected: ButtonsBarOptionsType | undefined,
  ) {
    setSortBy(sortBy.value)
    setType(buttonSelected ? buttonSelected.id : 4)
  }

  useEffect(() => {
    let newList = videoList()

    let newListVideos: VideoListType[] = []

    newList.map((item) => {
      if (item.type === type) newListVideos.push(item)
    })

    let listSorted = newListVideos.sort((a, b) => {
      if (sortBy == 'created_at') {
        const sortA = a.createdAt.getTime()
        const sortB = b.createdAt.getTime()

        return sortA - sortB
      }

      return a.type - b.type
    })
    handleCurrentPage(1)
    controlList(listSorted.length)
    setList(listSorted)
  }, [sortBy, type])

  return (
    <div className='flex w-full flex-col justify-start items-center'>
      <PrimaryBoard />

      <div className='flex flex-col justify-center items-center w-full py-4 desktop:py-20'>
        <ButtonsBar
          selections={(sortBy, buttonSelected) =>
            handleSelectionFilter(sortBy, buttonSelected)
          }
        />
        {/* grid */}
        <div className='flex w-full px-4 phone:px-0 phone:w-[90%] tablet:w-[80%]  monitor:w-[50%] flex-col py-12 gap-6 '>
          <div
            id='point'
            className={`w-full ${
              list.length
                ? 'flex flex-col desktop:grid grid-cols-3'
                : 'flex justify-center items-center'
            } gap-8 border-b-2 border-line-dark pb-16`}
          >
            {!list.length && (
              <h2 className='text-lg font-primary font-semibold text-blue-light'>
                Nenhum vídeo encontrado
              </h2>
            )}
            {list.length > 0 &&
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
          {list.length > 0 && (
            <Pagination
              totalPages={totalPages}
              handleCurrentPage={handleCurrentPage}
              currentPage={currentPage}
            />
          )}
        </div>{' '}
      </div>

      <SecondBoard />
    </div>
  )
}
