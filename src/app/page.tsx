'use client'
// vendors
import { useEffect, useState, useContext } from 'react'
import 'tailwindcss/tailwind.css'

// components
import { PrimaryBoard } from '@/components/boards/primary'
import { SecondBoard } from '@/components/boards/second'
import { ButtonsBar } from '@/components/buttons/buttonsBar'
import { Pagination } from '@/components/pagination'
import { VideosGrid } from '@/components/videosGrid'

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
import { PlayerContext } from '@/contexts/player'

export default function Home() {
  const [list, setList] = useState<VideoListType[]>([])
  const [sortBy, setSortBy] = useState<string>('created_at')
  const [type, setType] = useState<number>(4)

  const {
    currentPage,
    controlList,
    itemsPerPage,
    handleCurrentPage,
    totalPages,
  } = useContext(PaginationContext)
  const { playerState } = useContext(PlayerContext)

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
    <div
      className={`flex w-full  justify-center items-center  flex-col pb-12 gap-6 ${
        playerState.fullScreen || playerState.maxScreen
          ? '[&::-webkit-scrollbar]:display-none'
          : ''
      }`}
    >
      <div className='flex w-full flex-col justify-center items-center '>
        <PrimaryBoard />

        <div className='flex flex-col justify-center items-center w-full gap-8 py-4 '>
          {/* filters */}
          <ButtonsBar
            selections={(sortBy, buttonSelected) =>
              handleSelectionFilter(sortBy, buttonSelected)
            }
          />

          {/* grid */}
          <VideosGrid
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalPages={totalPages}
            list={list}
          />

          {/*  pagination */}
          {list.length > 0 && (
            <Pagination
              totalPages={totalPages}
              handleCurrentPage={handleCurrentPage}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
      <SecondBoard />
    </div>
  )
}
