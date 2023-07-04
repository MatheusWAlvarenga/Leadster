// vendors
import 'tailwindcss/tailwind.css'

// components
import { PrimaryBoard } from '@/components/primaryBoard'
import { SecondaryBoard } from '@/components/secondaryBoard'

export default function Home() {
  return (
    <div className='flex flex-col  justify-start items-center  '>
      <PrimaryBoard />
      <div>Content</div>
      <SecondaryBoard />
    </div>
  )
}
