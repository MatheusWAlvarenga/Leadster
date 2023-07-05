// vendors
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CiCreditCardOff } from 'react-icons/ci'

// assets
import compare from '@/assets/comparativo_img_CTA.png'
import selo from '@/assets/selo_RD.png'
import rating from '@/assets/rating.webp'

// components
import { PrimaryButton } from '../buttons/primary'

export function SecondaryBoard() {
  // const router = useRouter()
  function handleOnClick() {
    alert('onClick')
    // router.push('/demonstration')
  }
  return (
    <div className='flex justify-start items-center bg-highlight w-full '>
      <div className='relative -ml-32 w-[48rem] overflow-hidden '>
        <div className='h-[40rem] w-[40rem] -mt-40 -ml-40 bg-detail bg-opacity-5 rotate-45 transform origin-bottom-left rounded-tl-[48px]'></div>
      </div>
      <div className='flex z-10 w-full -ml-[40rem] px-32 gap-12'>
        <div className='flex w-full '>
          <Image className='w-[30rem]' src={compare} alt='' />
        </div>

        <div className='flex flex-col justify-center items-start w-full mr-10 gap-2'>
          <div className='flex flex-col justify-center items-startpb-2 gap-1'>
            <span className='text-base-title font-primary font-normal text-start text-3xl'>
              Pronto para triplicar sua
            </span>
            <span className='text-base-title font-primary font-semibold text-start text-3xl'>
              Geração de Leads?
            </span>
          </div>
          <div className='flex gap-1'>
            <span className='text-base-title font-primary font-normal text-start text-sm'>
              Criação e ativação em
            </span>
            <span className='text-base-title font-primary font-semibold text-start text-sm'>
              4 minutos.
            </span>
          </div>
          <div className='flex w-full flex-col justify-center items-start border-t border-line-dark py-2  gap-1'>
            <div className='flex  justify-center items-center  p-2 gap-4'>
              <PrimaryButton title='ver demonstração' />
              <Image className='w-[16rem]' src={selo} alt='' />
            </div>
            <div className='flex w-full gap-2'>
              <div className='flex gap-1'>
                <CiCreditCardOff />
                <span className='text-base-title font-primary font-semibold text-start text-xs'>
                  Não
                </span>
                <span className='text-base-title font-primary font-normal text-start text-xs'>
                  é necessário Cartão de Crédito |
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
    </div>
  )
}
