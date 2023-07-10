// vendors
import { useContext } from 'react'

import {
  IoPlaySkipBackSharp,
  IoPlaySharp,
  IoPlaySkipForwardSharp,
  IoPauseSharp,
} from 'react-icons/io5'
import { BsFillGearFill } from 'react-icons/bs'
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi'
import { MdOutlineRectangle } from 'react-icons/md'

// context
import { PlayerContext } from '@/contexts/player'

export function Player() {
  const {
    playerField,
    sliderController,
    handlePlay,
    playerState,
    handlePlaybackRate,
    rangeSlider,
    handleToBackOrToFrontVideo,
    handleViewPlaybackRateMenu,
    handleFullScreen,
    handleMaxScreen,
    videoInfo,
    hoverVideo,
    fullScreen,
    maxScreen,
  } = useContext(PlayerContext)

  return (
    <div className='flex bg-video-background justify-center items-center h-full w-full'>
      {videoInfo?.file && (
        <video
          className={`${!playerState.loading ? 'flex' : 'hidden'}`}
          ref={playerField}
          width='100%'
          height='100%'
          controls={false}
          onTimeUpdate={sliderController}
          onClick={handlePlay}
        >
          <source src={videoInfo.file} type='video/mp4' />
        </video>
      )}

      {/* central play */}
      {playerState.playing && !playerState.loading && (
        <div className='flex absolute justify-center items-center w-[4rem] h-[4rem] desktop:w-[6rem] desktop:h-[6rem] -mt-[1.5rem] rounded-full bg-video-icon-background bg-opacity-50'>
          <button
            onClick={handlePlay}
            className='flex justify-center items-center w-full h-full  text-white '
            type='button'
          >
            <IoPlaySharp
              className='w-[2rem] h-[2rem] desktop:w-[4rem] desktop:h-[4rem] ml-2 desktop:ml-3'
              fill='white'
            />
          </button>
        </div>
      )}
      {/* controller bar  */}
      {(playerState.playing || hoverVideo) && !playerState.loading && (
        <div
          className={`flex flex-col fixed ${
            fullScreen || maxScreen
              ? 'bottom-5 border border-white rounded-lg p-4 bg-white bg-opacity-30 border-opacity-30'
              : 'mt-[13.2rem]'
          }   w-[24rem] desktop:w-[28rem] px-2 gap-2 ${
            playerState.playing || hoverVideo
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5'
          } transition duration-300 translate-delay-300`}
        >
          {/* slider   */}
          <div className='flex flex-col gap-0 desktop:gap-3 w-full justify-start items-start'>
            <div
              className={`flex w-full justify-end -mt-[14rem] desktop:-mt-[12.5rem]  ${
                playerState.menuView
                  ? '-translate-y-[0rem] opacity-100'
                  : 'translate-y-[5rem] opacity-0 pointer-events-none'
              } transition duration-500 delay-300 `}
            >
              <div className='flex flex-col bg-white  py-2 bg-opacity-70  rounded-lg gap-2 '>
                <button
                  onClick={() => handlePlaybackRate(0.25)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 0.25 ? 'text-video-slider' : ''
                  }`}
                >
                  .25x
                </button>
                <button
                  onClick={() => handlePlaybackRate(0.5)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 0.5 ? 'text-video-slider' : ''
                  }`}
                >
                  .5x
                </button>
                <button
                  onClick={() => handlePlaybackRate(0.75)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 0.75 ? 'text-video-slider' : ''
                  }`}
                >
                  .75x
                </button>
                <button
                  onClick={() => handlePlaybackRate(1)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 1 ? 'text-video-slider' : ''
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => handlePlaybackRate(1.25)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 1.25 ? 'text-video-slider' : ''
                  }`}
                >
                  1.25x
                </button>
                <button
                  onClick={() => handlePlaybackRate(1.5)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 1.5 ? 'text-video-slider' : ''
                  }`}
                >
                  1.5x
                </button>
                <button
                  onClick={() => handlePlaybackRate(1.75)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 1.75 ? 'text-video-slider' : ''
                  }`}
                >
                  1.75x
                </button>
                <button
                  onClick={() => handlePlaybackRate(2)}
                  className={`text-[.65rem] hover:bg-gray-400 bg-opacity-50 px-2 ${
                    playerState.playbackRate == 2 ? 'text-video-slider' : ''
                  }`}
                >
                  2x
                </button>
              </div>
            </div>

            <input
              className={`w-full ${
                fullScreen || maxScreen ? 'mt-7' : 'mt-0'
              } desktop:mt-0 appearance-none [&::-webkit-slider-runnable-track]:rounded-none [&::-webkit-slider-runnable-track]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:h-[2px] [&::-webkit-slider-thumb]:w-[1px] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-transparent `}
              type='range'
              min='0'
              max='100'
              value={playerState.currentTime}
              onChange={rangeSlider}
              style={{
                'background': `linear-gradient(to right, red ${playerState.currentTime}%, #FFF 0px`,
              }}
            />
          </div>

          {/* buttons   */}
          <div
            className={`flex ${
              fullScreen || maxScreen ? 'mt-0' : '-mt-6'
            } desktop:mt-0 justify-between items-center px-2`}
          >
            <div className='flex gap-6 text-white'>
              <button
                onClick={() => handleToBackOrToFrontVideo('back')}
                className='w-full h-full'
                type='button'
              >
                <IoPlaySkipBackSharp className='w-5 h-5' />
              </button>
              <button
                onClick={handlePlay}
                className='w-full h-full'
                type='button'
              >
                {playerState.playing ? (
                  <IoPlaySharp className='w-5 h-5' />
                ) : (
                  <IoPauseSharp className='w-5 h-5' />
                )}
              </button>
              <button
                onClick={() => handleToBackOrToFrontVideo('front')}
                className='w-full h-full'
                type='button'
              >
                <IoPlaySkipForwardSharp className='w-5 h-5' />
              </button>
            </div>
            <div className='flex gap-2 text-white'>
              <button
                onClick={handleViewPlaybackRateMenu}
                className={`w-full h-full ${
                  playerState.menuView ? 'opacity-80' : 'opacity-100'
                }`}
                type='button'
              >
                <BsFillGearFill className='w-5 h-5' />
              </button>
              <button
                onClick={handleMaxScreen}
                className='w-full h-full'
                type='button'
              >
                <MdOutlineRectangle className='w-5 h-5' />
              </button>
              <button
                onClick={handleFullScreen}
                className='w-full h-full'
                type='button'
              >
                {fullScreen ? (
                  <BiExitFullscreen className='w-5 h-5' />
                ) : (
                  <BiFullscreen className='w-5 h-5' />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <span> {fullScreen} </span>
        <span>{maxScreen}</span>
      </div>
    </div>
  )
}
