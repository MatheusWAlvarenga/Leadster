// vendors
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CiCreditCardOff } from 'react-icons/ci'

// assets
import compare from '@/assets/comparativo_img_CTA.png'
import selo from '@/assets/selo_RD.png'
import rating from '@/assets/rating.webp'

// components
import { SecondButton } from '../../buttons/second'

export function SecondBoard() {
  // const router = useRouter()
  function handleOnClick() {
    alert('onClick')
    // router.push('/demonstration')
  }
  return (
    <div className='flex justify-center items-center bg-highlight w-full overflow-hidden py-8'>
      <div className='flex flex-col desktop:flex-row justify-center items-center z-10 w-full tablet:w-[80%]  monitor:w-[50%]'>
        <div className='flex justify-center w-full mt-8'>
          <Image className='w-[20rem] desktop:w-[30rem]' src={compare} alt='' />
        </div>

        <div className='flex flex-col justify-center items-center desktop:justify-start desktop:items-start w-full px-0 desktop:px-4 desktop:mr-10 gap-2 mt-4 desktop:mt-0 h-auto '>
          <div className='flex flex-col justify-center items-start pb-2 gap-1'>
            <span className='text-base-title font-primary font-normal text-center desktop:text-start text-[1.25rem] desktop:text-[1.875rem]'>
              Pronto para triplicar sua
            </span>
            <span className='text-base-title font-primary font-semibold text-center desktop:text-start text-[1.25rem] desktop:text-[1.875rem]'>
              Geração de Leads?
            </span>
          </div>
          <div className='flex justify-center desktop:justify-start gap-1'>
            <span className='text-base-title font-primary font-normal text-center desktop:text-start text-sm'>
              Criação e ativação em
            </span>
            <span className='text-base-title font-primary font-semibold text-center desktop:text-start text-sm'>
              4 minutos.
            </span>
          </div>
          <div className='flex w-[90%] desktop:w-full flex-col justify-center items-start border-t border-line-dark py-4 desktop:py-2  gap-1'>
            <div className='flex flex-col desktop:flex-row justify-center items-center w-full desktop:w-auto  p-2 gap-4'>
              <SecondButton title='ver demonstração' />
              <Image
                className='w-[10rem] desktop:w-[16rem]'
                src={selo}
                alt=''
              />
            </div>
            <div className='flex flex-col desktop:flex-row items-center desktop:items-start w-full gap-2'>
              <div className='flex gap-1'>
                <CiCreditCardOff />
                <span className='text-base-title font-primary font-semibold text-start text-xs'>
                  Não
                </span>
                <span className='flex text-base-title font-primary font-normal text-start text-xs'>
                  é necessário Cartão de Crédito
                  <span className='text-base-title font-primary font-normal text-start text-xs hidden desktop:flex ml-1'>
                    |
                  </span>
                </span>
              </div>
              <div className='flex gap-1'>
                <Image className='' src={rating} alt='' />
                <span className='text-base-title font-primary font-semibold text-start text-xs'>
                  4.9/5
                </span>
                <span className='text-base-title font-primary font-normal text-start text-xs'>
                  média de satisfação
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex absolute justify-start  w-full overflow-hidden '>
        <div className='h-[28rem] w-[28rem] mt-[17rem] -ml-[16rem] desktop:h-[38rem] desktop:w-[38rem]  desktop:-mt-[4rem]  bg-detail bg-opacity-5 rotate-45 transform origin-bottom-left rounded-tl-[48px]' />
      </div>
    </div>
  )
}
