// vendors
import Image from 'next/image'

// assets
import headerLogo from '@/assets/header-logo.svg'

export function PrimaryBoard() {
  return (
    <div className='flex flex-col justify-center items-center bg-highlight py-[10rem]  w-full'>
      <div className='flex border-4 border-blue-dark rounded-[50px] py-2 px-5 rounded-bl-[4px] uppercase text-blue-dark font-semibold'>
        webnars exclusivos
      </div>
      <div className='flex text-[3rem] text-base-title'>Menos Conversinha,</div>
      <div className='flex -mt-[1.5rem] justify-center items-center'>
        <span className='flex text-[5.5rem] text-blue-dark'>
          Mais Conversão
        </span>
        <Image className='-mt-[3rem] -ml-[1.75rem]' src={headerLogo} alt='' />
      </div>
      <div className='border-b border-line-dark w-[44rem]' />
      <span className='text-lg mt-[1rem]'>
        Conheça as estratégias que{' '}
        <span className='text-base-title text-[1.125rem] font-semibold'>
          mudaram o jogo
        </span>{' '}
        e como aplicá-las no seu negócio
      </span>
    </div>
  )
}
