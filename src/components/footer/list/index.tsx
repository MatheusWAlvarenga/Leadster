// vendors
import Link from 'next/link'
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi'
import { TfiInstagram } from 'react-icons/tfi'

// types
interface ListFooterProps {
  title: string
  items: ItemsType[]
}

type ItemsType = {
  id: number
  name: string
  link: string
  type?: string
}

export function ListFooter({ title, items }: ListFooterProps) {
  return (
    <div className='flex w-full flex-col gap-2 desktop:gap-8 mb-8 desktop:mb-0 items-center desktop:items-center'>
      <h2 className='flex w-full justify-center desktop:justify-start text-base-title text-center desktop:text-start font-primary font-semibold text-sm'>
        {title}
      </h2>
      <div className='flex w-full flex-col items-center desktop:items-start gap-4 mt-2 desktop:mt-0 desktop:gap-8 '>
        {items.length &&
          items.map((item) => {
            switch (item.type) {
              case undefined:
                return (
                  <span
                    className='flex text-base-subtitle font-primary font-thin text-xs'
                    key={item.id}
                  >
                    {item.name}
                  </span>
                )

              case 'socialMedia':
                return (
                  <div key={item.id} className='flex gap-4'>
                    <Link
                      className='flex text-base-icon-text font-thin text-[1rem] bg-base-icon-default rounded-full p-1 hover:bg-base-icon-hover hover:text-white transition duration-200'
                      href='https://www.linkedin.com/company/getleadster/'
                      target='_blank'
                    >
                      <BiLogoLinkedin />
                    </Link>
                    <Link
                      className='flex text-base-icon-text font-thin text-[1rem] bg-base-icon-default rounded-full p-1 hover:bg-base-icon-hover hover:text-white transition duration-200'
                      href='https://www.facebook.com/leadsterplatform/'
                      target='_blank'
                    >
                      <BiLogoFacebook />
                    </Link>
                    <Link
                      className='flex text-base-icon-text font-thin text-[1rem] bg-base-icon-default rounded-full p-1 hover:bg-base-icon-hover hover:text-white transition duration-200'
                      href='https://www.instagram.com/leadster.com.br/'
                      target='_blank'
                    >
                      <TfiInstagram />
                    </Link>
                  </div>
                )

              case 'link':
                return (
                  <Link
                    className='flex font-primary text-base-subtitle font-thin text-xs underline-light-100 hover:text-blue-dark  transition duration-300'
                    key={item.id}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                )
              case 'email':
                return (
                  <div className='flex gap-2'>
                    <span className='text-base-title font-primary font-normal text-xs '>
                      E-mail:
                    </span>
                    <Link
                      className='flex text-base-subtitle font-primary font-thin text-xs hover:text-blue-dark  transition duration-300'
                      key={item.id}
                      href={`mailto:${item.name}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                )
              case 'tel':
                return (
                  <div className='flex gap-2'>
                    <span className='text-base-title font-primary font-normal text-xs'>
                      Telefone:
                    </span>
                    <span
                      className='flex text-base-subtitle font-primary font-thin text-xs'
                      key={item.id}
                    >
                      {item.name}
                    </span>
                  </div>
                )
            }
          })}
      </div>
    </div>
  )
}
