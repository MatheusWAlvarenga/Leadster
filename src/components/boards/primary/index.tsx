// vendors
import Image from 'next/image'

// assets
import headerLogo from '@/assets/header-logo.svg'

export function PrimaryBoard() {
  return (
    <div className='flex flex-col justify-center items-center bg-highlight py-[5rem] desktop:py-[10rem]  w-full'>
      <div className='flex justify-center items-center border-2 mb-2 font-primary border-blue-dark rounded-[50px] py-1 px-6 rounded-bl-[4px] uppercase text-blue-dark font-semibold text-[.65rem] desktop:text-[.75rem] '>
        webnars exclusivos
      </div>
      <div className='flex text-[1.25rem] desktop:text-[2.25rem] font-primary text-base-title'>
        Menos Conversinha,
      </div>
      <div className='flex -mt-[.35rem] desktop:-mt-[1rem] font-primary font-semibold justify-center items-center'>
        <span className='flex text-[2.25rem] desktop:text-[4.25rem] text-blue-dark'>
          Mais Conversão
        </span>
        <Image
          className='-mt-[2.25rem] desktop:-mt-[3rem] -ml-[1rem] desktop:-ml-[1.75rem] w-[1.75rem] desktop:w-auto'
          src={headerLogo}
          alt=''
        />
      </div>
      <div className='border-b border-line-dark w-[90%] desktop:w-[35rem]' />
      <span className='text-center desktop:text-start text-[.75rem] desktop:text-[.875rem] font-primary mt-[1rem]  desktop:w-auto'>
        Conheça as estratégias que{' '}
        <span className='text-base-title font-primary text-[.75rem] desktop:text-[.875rem] font-semibold'>
          mudaram o jogo
        </span>{' '}
        e como aplicá-las no seu negócio
      </span>
    </div>
  )
}
