// vendors
import Image from 'next/image'

// assets
import compare from '@/assets/compare.svg'

export function SecondaryBoard() {
  return (
    <div className='flex flex-col justify-center items-center bg-highlight py-[10rem] pb-[5rem] w-full'>
      <Image className='-mt-[3rem] -ml-[1.75rem]' src={compare} alt='' />
    </div>
  )
}
