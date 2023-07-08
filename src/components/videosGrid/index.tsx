// components
import { Card } from '@/components/card'

// types
import { VideoListType } from '../../../public/videos'
import { list } from 'postcss'
interface VideosGridProps {
  totalPages: number[]
  itemsPerPage: number
  currentPage: number
  list: VideoListType[]
}

export function VideosGrid({
  currentPage,
  itemsPerPage,
  list,
}: VideosGridProps) {
  return (
    <div
      className={`w-full desktop:w-[80%] monitor:w-[50%] justify-center items-center border-b-2 border-line-dark pb-16`}
    >
      <div
        className={`flex flex-col w-full justify-center  items-center ${
          list.length ? 'desktop:grid grid-cols-3 gap-8' : ''
        }  justify-between items-center `}
      >
        {!list.length && (
          <h2 className='flex text-lg font-primary font-semibold text-blue-light'>
            Nenhum vídeo encontrado
          </h2>
        )}
        {list.length > 0 &&
          list.map((card, index) => {
            if (currentPage === 1 && index >= 0 && index < itemsPerPage)
              return <Card key={card.id} props={card} />
            if (
              index >= (currentPage - 1) * itemsPerPage &&
              index < currentPage * itemsPerPage
            )
              return <Card key={card.id} props={card} />
          })}
      </div>
    </div>
  )
}
