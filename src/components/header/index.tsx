// vendors
import Image from 'next/image'

// assets
import Logo from '@/assets/logo.svg'

export function Header() {
  return (
    <div className='flex w-full justify-center items-center p-8'>
      <Image className='flex w-32' src={Logo} alt='' />
    </div>
  )
}
