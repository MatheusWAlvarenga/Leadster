'use client'

// vendors
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

// context
import { PlayerContext } from '@/contexts/player'

// components
import { DownloadButton } from '@/components/buttons/downloadButton'
import { Player } from '@/components/player'

export function PlayerModal() {
  const {
    playerOn,
    playerViewControl,
    videoInfo,
    fullScreen,
    maxScreen,
    watchHoverVideo,
    hoverVideo,
  } = useContext(PlayerContext)

  function handleOnCloseClick() {
    playerViewControl(false)
  }

  return (
    <div
      className={`${
        playerOn ? 'flex' : 'hidden'
      }  fixed w-full h-screen z-50 bg-btn-gray-title bg-opacity-60 justify-center items-center`}
      onMouseMove={() => watchHoverVideo(true)}
      onMouseLeave={() => watchHoverVideo(false)}
    >
      <div
        className={`flex  flex-col justify-start items-center gap-2  ${
          maxScreen && !fullScreen ? 'h-auto w-auto ' : ''
        }  ${!maxScreen && fullScreen ? 'w-full h-full ' : ''} ${
          !maxScreen && !fullScreen
            ? 'h-[36.95rem] w-[28.5rem] bg-white border-t-2 border-blue-dark rounded-lg'
            : ''
        }`}
      >
        {!fullScreen && (
          <div
            className={`${
              (hoverVideo && maxScreen) || !maxScreen ? 'flex' : 'hidden'
            } w-full justify-end items-center mt-3 mr-3 `}
          >
            <button
              className='bg-opacity-10 text-btn-gray-title bg-white border border-white border-opacity-50 hover:border-opacity-0 hover:text-base-icon-default hover:bg-btn-gray-title rounded-full p-2'
              type='button'
              onClick={handleOnCloseClick}
            >
              <AiOutlineClose />
            </button>
          </div>
        )}

        {!maxScreen && !fullScreen && (
          <div className='flex w-[70%] justify-center items-center -mt-4 pb-2 '>
            <span className='text-[1rem] font-primary font-semibold text-base-title'>
              {videoInfo?.event && (
                <span className='text-[1rem] font-primary font-semibold text-blue-dark mr-2'>
                  {videoInfo?.event + ':'}
                </span>
              )}
              {videoInfo?.title}
            </span>
          </div>
        )}

        <div
          className={`flex w-full justify-center items-center ${
            maxScreen && !fullScreen ? 'h-full' : 'h-[30rem]'
          } ${!maxScreen && fullScreen ? 'h-auto' : 'h-[30rem]'}`}
        >
          <Player />
        </div>

        {!maxScreen && !fullScreen && (
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
        )}
      </div>

      {!fullScreen && (
        <div
          className={`absolute hidden desktop:flex flex-col  justify-center items-start bottom-0 left-0 w-30 p-3 gap-2 bg-white`}
        >
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
      )}
    </div>
  )
}
