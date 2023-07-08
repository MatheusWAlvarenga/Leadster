'use client'

// vendors
import { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GrPlayFill } from 'react-icons/gr'

// context
import { PlayerContext } from '@/contexts/player'

// components
import { DownloadButton } from '@/components/buttons/downloadButton'
import { Player } from '@/components/player'

// video
const videoURL = '@/../public/videos/exampleVideo.mp4'

export function PlayerModal() {
  const { playerOn, playerViewControl, videoInfo } = useContext(PlayerContext)
  const [playerState, setPlayState] = useState({
    playing: false,
  })

  function handleOnCloseClick() {
    playerViewControl(false)
  }

  return (
    <div
      className={`${
        playerOn ? 'flex' : 'hidden'
      }  fixed w-full h-full z-50 bg-btn-gray-title bg-opacity-60 justify-center items-center`}
    >
      <div className='flex  flex-col justify-start items-center gap-2 bg-white border-t-2 border-blue-dark rounded-lg h-[36.5rem] w-[28.5rem] '>
        <div className='flex w-full justify-end items-center mt-3 mr-3'>
          <button
            className='text-base-icon-text'
            type='button'
            onClick={handleOnCloseClick}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className='flex w-[70%] justify-center items-center pb-2'>
          <span className='text-[1rem] font-primary font-semibold text-base-title'>
            {videoInfo?.event && (
              <span className='text-[1rem] font-primary font-semibold text-blue-dark mr-2'>
                {videoInfo?.event + ':'}
              </span>
            )}
            {videoInfo?.title}
          </span>
        </div>

        <div className='flex w-full justify-center items-center h-[30rem]'>
          <Player />
        </div>

        <div className='flex flex-col w-full px-4 py-2 pb-6 gap-5'>
          <div className='flex flex-col w-full justify-center items-start gap-3'>
            <div className='flex w-full text-xs font-semibold font-primary pb-2 border-b border-line-dar text-base-title'>
              Descrição
            </div>
            <div className='flex w-full text-xs font-light font-primary text-base-subtitle'>
              {videoInfo?.description}
            </div>
          </div>
          <div className='flex flex-col w-full justify-center items-start gap-3'>
            <div className='flex w-full text-xs font-semibold font-primary pb-2 border-b border-line-dar text-base-title'>
              Downloads
            </div>
            <div className='flex w-full gap-2 text-white'>
              <DownloadButton
                title='Spreadsheet.xls'
                color='green'
                src='public/Spreadsheet.xls'
              />
              <DownloadButton
                title='Document.doc'
                color='blue'
                src='public/Document.doc'
              />
              <DownloadButton
                title='Presentation.ppt'
                color='yellow'
                src='public/Presentation.ppt'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='absolute flex flex-col  justify-center items-start bottom-0 left-0 w-30 p-3 gap-2 bg-white'>
        <DownloadButton
          title='Spreadsheet.xls'
          color='green'
          src='public/Spreadsheet.xls'
        />
        <DownloadButton
          title='Document.doc'
          color='blue'
          src='public/Document.doc'
        />
        <DownloadButton
          title='Presentation.ppt'
          color='yellow'
          src='public/Presentation.ppt'
        />
        <DownloadButton
          title='Folder.zip'
          color='gray'
          src='public/Folder.zip'
        />
      </div>
    </div>
  )
}
