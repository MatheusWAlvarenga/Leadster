// vendors
import { useState } from 'react'

import {
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoPlaySkipForwardSharp,
  IoPauseSharp,
} from 'react-icons/io5'
import { BsFillGearFill } from 'react-icons/bs'
import { BiFullscreen } from 'react-icons/bi'
import { MdOutlineRectangle } from 'react-icons/md'

export function Player() {
  const [hoverStatus, setHoverStatus] = useState(false)
  const [playerStatus, setPlayerStatus] = useState({
    playing: false,
  })

  function watchHoverVideo(hoverOn: boolean) {
    if (!hoverOn) {
      setTimeout(() => {
        setHoverStatus(false)
      }, 3000)

      return
    }

    setHoverStatus(true)
  }

  function handlePlayControl() {
    const statusPlay = playerStatus.playing
    setPlayerStatus({
      ...playerStatus,
      playing: !statusPlay,
    })
  }

  return (
    <div
      className='flex bg-video-background justify-center items-center h-full'
      onMouseEnter={() => watchHoverVideo(true)}
      onMouseLeave={() => watchHoverVideo(false)}
    >
      <video
        className='flex h-[16rem] w-full'
        src='https://www.youtube.com/watch?v=iHetrYfuJ-w&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=1&pp=iAQB'
        poster='https://www.youtube.com/watch?v=iHetrYfuJ-w&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=1&pp=iAQB'
      />

      {/* central play */}
      {!playerStatus.playing && (
        <div className='flex absolute justify-center items-center w-[6rem] h-[6rem] -mt-[1.5rem] rounded-full bg-video-icon-background'>
          <button
            onClick={handlePlayControl}
            className='flex justify-center items-center w-full h-full  text-white '
            type='button'
          >
            <IoPlaySharp className='w-[4rem] h-[4rem] ml-3' fill='white' />
          </button>
        </div>
      )}

      {/* controller bar  */}
      {/* {!playerStatus.playing ||
        (hoverStatus && ( */}
      <div
        className={`flex flex-col fixed mt-[13.2rem]  w-[28rem] px-2 gap-2 ${
          !playerStatus.playing || hoverStatus
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        } transition duration-300 translate-delay-300`}
      >
        {/* slider  */}
        <div className='flex w-full justify-start items-start'>
          <div className='flex bg-video-slider w-[30%] h-[3px]' />
          <div className='flex bg-white w-[70%] h-[3px]' />
        </div>

        {/* buttons  */}
        <div className='flex justify-between items-center px-2'>
          <div className='flex gap-6 text-white'>
            <button className='w-full h-full' type='button'>
              <IoPlaySkipBackSharp className='w-5 h-5' />
            </button>
            <button
              onClick={handlePlayControl}
              className='w-full h-full'
              type='button'
            >
              {!playerStatus.playing ? (
                <IoPlaySharp className='w-5 h-5' />
              ) : (
                <IoPauseSharp className='w-5 h-5' />
              )}
            </button>
            <button className='w-full h-full' type='button'>
              <IoPlaySkipForwardSharp className='w-5 h-5' />
            </button>
          </div>
          <div className='flex gap-2 text-white'>
            <button className='w-full h-full' type='button'>
              <BsFillGearFill className='w-5 h-5' />
            </button>
            <button className='w-full h-full' type='button'>
              <MdOutlineRectangle className='w-5 h-5' />
            </button>
            <button className='w-full h-full' type='button'>
              <BiFullscreen className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}
