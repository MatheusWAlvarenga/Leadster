'use client'

// vendors
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

// context
import { PlayerContext } from '@/contexts/player'

// components
import { DownloadButton } from '@/components/buttons/downloadButton'
import { Player } from '@/components/player'
import { Loading } from '@/components/loading'

export function PlayerModal() {
  const { playerOn, playerViewControl, videoInfo, playerState } =
    useContext(PlayerContext)

  function handleOnCloseClick() {
    playerViewControl(false)
  }

  return (
    <>
      {playerState.loading && <Loading />}
      {!playerState.loading && (
        <div
          className={`${
            playerOn ? 'flex' : 'hidden'
          }  fixed w-full h-screen z-50 bg-btn-gray-title bg-opacity-60 justify-center items-center`}
        >
          <div
            className={`flex  flex-col justify-start items-center gap-2  ${
              playerState.maxScreen && !playerState.fullScreen
                ? 'h-auto w-auto '
                : ''
            }  ${
              !playerState.maxScreen && playerState.fullScreen
                ? 'w-full h-full '
                : ''
            } ${
              !playerState.maxScreen && !playerState.fullScreen
                ? 'h-[37.25rem] w-[28.5rem] bg-white border-t-2 border-blue-dark rounded-lg'
                : ''
            }`}
          >
            {!playerState.fullScreen && (
              <div className='flex w-full justify-end items-center mt-3 mr-3 '>
                <button
                  className='bg-opacity-10 text-btn-gray-title bg-white border border-white border-opacity-50 hover:border-none hover:text-base-icon-default hover:bg-btn-gray-title rounded-full p-2'
                  type='button'
                  onClick={handleOnCloseClick}
                >
                  <AiOutlineClose />
                </button>
              </div>
            )}

            {!playerState.maxScreen && !playerState.fullScreen && (
              <div className='flex w-[70%] justify-center items-center pb-2 -mt-2'>
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
                playerState.maxScreen && !playerState.fullScreen
                  ? 'h-full'
                  : 'h-[30rem]'
              } ${
                !playerState.maxScreen && playerState.fullScreen
                  ? 'h-auto'
                  : 'h-[30rem]'
              }`}
            >
              <Player />
            </div>

            {!playerState.maxScreen && !playerState.fullScreen && (
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

          {!playerState.fullScreen && (
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

          {/* {playerState.fullScreen && (
        <div className='flex w-full justify-center items-center'>
          <Player />
        </div>
      )} */}
        </div>
      )}
    </>
  )
}
