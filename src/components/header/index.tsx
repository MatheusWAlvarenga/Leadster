// vendors
import Link from 'next/link'
import Image from 'next/image'

// assets
import Logo from '@/assets/logo.png'

export function Header() {
  return (
    <div className='flex w-full justify-center items-center p-2 desktop:p-8'>
      <Link href='/'>
        <Image className='flex w-24 desktop:w-32' src={Logo} alt='' />
      </Link>
    </div>
  )
}
