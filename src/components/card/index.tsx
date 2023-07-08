'use client'
// vendors
import { useState, useContext } from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

// types
import { VideoListType } from '../../../public/videos'

interface CardProps {
  props: VideoListType
}

// context
import { PlayerContext } from '@/contexts/player'

export function Card({ props }: CardProps) {
  const { playerViewControl, handleVideoInfoInPlayer } =
    useContext(PlayerContext)
  const [hoverControl, setHoverControl] = useState<boolean>(false)

  function handlePlayerView() {
    console.log(props)
    handleVideoInfoInPlayer(props)
    playerViewControl(true)
  }

  return (
    <button
      type='button'
      onClick={handlePlayerView}
      className='overflow-hidden justify-self-center items-self-center w-[22.5rem] h-[18.125rem] flex flex-col justify-start items-start  rounded-lg shadow-xl shadow-line-dark cursor-pointer transition duration-100 '
      onMouseEnter={() => setHoverControl(true)}
      onMouseLeave={() => setHoverControl(false)}
    >
      <Image
        src={require(`../../../public/thumbnail/${props.thumbnail}`)}
        width={360}
        height={206}
        alt={props.thumbnail}
      />
      {/* {hoverControl === true && ( */}
      <div
        className={`${
          hoverControl === true ? ' opacity-100 z-10 ' : 'opacity-0 z-0'
        } flex absolute w-[22.5rem] h-[12.875rem]  transition duration-500`}
      >
        <div className='flex flex-1 h-full justify-center items-center bg-opacity-30 bg-blue-standard rounded-t-lg'>
          <FaPlay
            className='absolute z-20 opacity-none w-[4rem] h-[4rem] rounded-none  text-white'
            color='white'
          />
        </div>
      </div>
      {/* )} */}
      <div className='flex w-full justify-center items-center text-start px-8 py-4'>
        <span
          className={`break-words font-primary font-semibold transition duration-500 ${
            hoverControl ? 'text-blue-dark' : 'text-base-title'
          }`}
        >
          {props.title}
        </span>
      </div>
    </button>
  )
}
