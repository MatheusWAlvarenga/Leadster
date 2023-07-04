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
    <div className='flex flex-col gap-8'>
      <h2 className='flex text-base-title font-semibold text-[1.125rem]'>
        {title}
      </h2>
      <div className='flex flex-col gap-6'>
        {items.length &&
          items.map((item) => {
            switch (item.type) {
              case undefined:
                return (
                  <span
                    className='flex text-base-subtitle font-thin text-[1rem]'
                    key={item.id}
                  >
                    {item.name}
                  </span>
                )

              case 'icon':
                return (
                  <div className='flex gap-4'>
                    <Link
                      className='flex text-base-icon-text font-thin text-[1rem] bg-base-icon-default rounded-full p-1 hover:bg-base-icon-hover'
                      key={item.id}
                      href='https://www.linkedin.com/company/getleadster/'
                      target='_blank'
                    >
                      <BiLogoLinkedin />
                    </Link>
                    <Link
                      className='flex text-base-icon-text font-thin text-[1rem] bg-base-icon-default rounded-full p-1 hover:bg-base-icon-hover'
                      key={item.id}
                      href='https://www.facebook.com/leadsterplatform/'
                      target='_blank'
                    >
                      <BiLogoFacebook />
                    </Link>
                    <Link
                      className='flex text-base-icon-text font-thin text-[1rem] bg-base-icon-default rounded-full p-1 hover:bg-base-icon-hover'
                      key={item.id}
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
                    className='flex text-base-subtitle font-thin text-[1rem] underline-light-100 hover:underline'
                    key={item.id}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                )
              case 'email':
                return (
                  <div className='flex gap-2'>
                    <span className='text-base-title font-normal text-sm'>
                      E-mail:
                    </span>
                    <Link
                      className='flex text-base-subtitle font-thin text-sm'
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
                    <span className='text-base-title font-normal text-sm'>
                      Telefone:
                    </span>
                    <span
                      className='flex text-base-subtitle font-thin text-sm'
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
