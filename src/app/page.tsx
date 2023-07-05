// vendors
import 'tailwindcss/tailwind.css'

// components
import { PrimaryBoard } from '@/components/boards/primary'
import { SecondBoard } from '@/components/boards/second'
import { ButtonsBar } from '@/components/buttons/buttonsBar'

export default function Home() {
  return (
    <div className='flex flex-col  justify-start items-center  '>
      <PrimaryBoard />
      <div className='flex justify-center items-center w-full  py-20'>
        <ButtonsBar />
      </div>
      <SecondBoard />
    </div>
  )
}
