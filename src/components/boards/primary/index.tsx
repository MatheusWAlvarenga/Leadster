// vendors
import Image from 'next/image'

// assets
import headerLogo from '@/assets/header-logo.svg'

export function PrimaryBoard() {
  return (
    <div className='flex flex-col justify-center items-center bg-highlight py-[5rem] desktop:py-[10rem]  w-full'>
      <div className='flex border-2 font-primary border-blue-dark rounded-[50px] py-2 px-5 rounded-bl-[4px] uppercase text-blue-dark font-semibold text-sm desktop:text-medium '>
        webnars exclusivos
      </div>
      <div className='flex text-[2rem] desktop:text-[3rem] font-primary text-base-title'>
        Menos Conversinha,
      </div>
      <div className='flex -mt-[.85rem] desktop:-mt-[1.5rem] font-primary justify-center items-center'>
        <span className='flex text-[3rem] desktop:text-[5.5rem] text-blue-dark'>
          Mais Conversão
        </span>
        <Image
          className='-mt-[2.25rem] desktop:-mt-[3rem] -ml-[1rem] desktop:-ml-[1.75rem] w-[1.75rem] desktop:w-auto'
          src={headerLogo}
          alt=''
        />
      </div>
      <div className='border-b border-line-dark w-[90%] desktop:w-[44rem]' />
      <span className='text-center desktop:text-start text-[.875rem] desktop:text-[1.125rem] font-primary mt-[1rem] w-[90%] desktop:w-auto'>
        Conheça as estratégias que{' '}
        <span className='text-base-title font-primary text-[.875rem] desktop:text-[1.125rem] font-semibold'>
          mudaram o jogo
        </span>{' '}
        e como aplicá-las no seu negócio
      </span>
    </div>
  )
}
