// vendors
import Image from 'next/image'

export function Loading() {
  return (
    <Image
      className='flex w-6 h-6 animate-spin'
      src={require('../../../public/favicon.ico')}
      alt='loading'
    />
  )
}
