// vendors
import { LiaCloudDownloadAltSolid } from 'react-icons/lia'

// types
interface DownloadButtonProps {
  title: string
  color: 'green' | 'blue' | 'yellow' | 'gray'
  src: string
}

export function DownloadButton({ title, color, src }: DownloadButtonProps) {
  function handleOnClick() {
    const exampleDownload = {
      file: title,
      type: title.split('.')[1],
      src,
      observation: 'Download example',
    }
    alert('Download Example \n' + JSON.stringify(exampleDownload))
  }

  switch (color) {
    case 'green':
      return (
        <button
          type='button'
          onClick={handleOnClick}
          className='flex bg-btn-green-second text-btn-green-title text-[.65rem] gap-2 justify-start items-center text pr-2 rounded-md'
        >
          <div className='flex bg-btn-green-primary h-full justify-center items-center w-6 rounded-l-md'>
            <LiaCloudDownloadAltSolid className='h-full w-full p-1' />
          </div>
          {title}
        </button>
      )

    case 'blue':
      return (
        <button
          type='button'
          onClick={handleOnClick}
          className='flex bg-btn-blue-second text-btn-blue-title text-[.65rem] gap-2 justify-start items-center text pr-2 rounded-md'
        >
          <div className='flex bg-btn-blue-primary h-full justify-center items-center w-6 rounded-l-md'>
            <LiaCloudDownloadAltSolid className='h-full w-full p-1' />
          </div>
          {title}
        </button>
      )

    case 'yellow':
      return (
        <button
          type='button'
          onClick={handleOnClick}
          className='flex bg-btn-yellow-second text-btn-yellow-title text-[.65rem] gap-2 justify-start items-center text pr-2 rounded-md'
        >
          <div className='flex bg-btn-yellow-primary h-full justify-center items-center w-6 rounded-l-md'>
            <LiaCloudDownloadAltSolid className='h-full w-full p-1' />
          </div>
          {title}
        </button>
      )

    case 'gray':
      return (
        <button
          type='button'
          onClick={handleOnClick}
          className='flex bg-btn-gray-second text-btn-gray-title text-[.65rem] gap-2 justify-start items-center text pr-2 rounded-md'
        >
          <div className='flex bg-btn-gray-primary h-full justify-center items-center w-6 rounded-l-md'>
            <LiaCloudDownloadAltSolid className='h-full w-full p-1' />
          </div>
          {title}
        </button>
      )
  }
}
