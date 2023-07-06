'use client'
// vendors
import { useState } from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

// type
interface CardProps {
  description: string
  thumbnail: string
}

export function Card({ description, thumbnail }: CardProps) {
  const [hoverControl, setHoverControl] = useState<boolean>(false)

  return (
    <button
      type='button'
      onClick={() => alert(`CLicou no video ${thumbnail}`)}
      className='overflow-hidden w-[22.5rem] h-[18.125rem] flex flex-col justify-start items-start  rounded-lg shadow-xl shadow-line-dark cursor-pointer transition duration-100 '
      onMouseEnter={() => setHoverControl(true)}
      onMouseLeave={() => setHoverControl(false)}
    >
      <Image
        src={require(`../../../public/thumbnail/${thumbnail}`)}
        width={360}
        height={206}
        alt={thumbnail}
      />
      {hoverControl === true && (
        <div className='absolute z-10  w-[22.5rem] h-[12.875rem]  '>
          <div className='flex flex-1 h-full justify-center items-center bg-opacity-30 bg-blue-standard rounded-t-lg'>
            <FaPlay
              className='absolute z-20 opacity-none w-[4rem] h-[4rem] rounded-none  text-white'
              color='white'
            />
          </div>
        </div>
      )}
      <div className='flex w-[80%]  p-4'>
        <span
          className={`break-words  font-primary font-semibold text-base transition duration-100 ${
            hoverControl ? 'text-blue-dark' : 'text-base-title'
          }`}
        >
          {description}
        </span>
      </div>
    </button>
  )
}
