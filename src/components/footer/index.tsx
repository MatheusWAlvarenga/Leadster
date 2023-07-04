// vendors
import Image from 'next/image'
import Link from 'next/link'

// assets
import logo from '@/assets/logo.svg'

// components
import { ListFooter } from './list'

export function Footer() {
  const list1 = [
    {
      id: 0,
      name: 'Home',
      link: '/',
      type: 'link',
    },
    {
      id: 1,
      name: 'Ferramenta',
      link: '/ferramentas',
      type: 'link',
    },
    {
      id: 2,
      name: 'Preços',
      link: '/precos',
      type: 'link',
    },
    {
      id: 3,
      name: 'Contato',
      link: '/contato',
      type: 'link',
    },
  ]
  const list2 = [
    {
      id: 0,
      name: 'Geração de Leads B2B',
      link: '',
    },
    {
      id: 1,
      name: 'Geração de Leads em Software',
      link: '',
    },
    {
      id: 2,
      name: 'Geração de Leads em Imobiliária',
      link: '',
    },
    {
      id: 3,
      name: 'Cases de Sucesso',
      link: '',
    },
  ]
  const list3 = [
    {
      id: 0,
      name: 'Blog',
      link: '/blog',
      type: 'link',
    },
    {
      id: 1,
      name: 'Parceria com Agências',
      link: '',
    },
    {
      id: 2,
      name: 'Guia Definitivo do Marketing',
      link: '/guia',
      type: 'link',
    },
    {
      id: 3,
      name: 'Materiais Gratuitos',
      link: '/materiais-gratuitos',
      type: 'link',
    },
  ]
  const list4 = [
    {
      id: 0,
      name: 'social media',
      link: '',
      type: 'icon',
    },
    {
      id: 1,
      name: 'contato@leadster.com.br',
      link: '',
      type: 'email',
    },
    {
      id: 2,
      name: '(42)  98828-9851',
      link: '',
      type: 'tel',
    },
  ]

  return (
    <div className='flex flex-col w-full h-[30rem] justify-center items-center p-8'>
      <div className='flex flex-col  justify-center items-center p-8 w-[50%] lg:w-[80%]'>
        <Image className='flex w-54' src={logo} alt='' />
        <span className='text-base-subtitle text-[0.65rem]'>
          Transformando visitantes em clientes.
        </span>
      </div>
      <div className='flex justify-between items-start my-12 w-[50%] lg:w-[80%]'>
        <ListFooter title='Links Principais' items={list1} />
        <ListFooter title='Cases' items={list2} />
        <ListFooter title='Materiais' items={list3} />
        <ListFooter title='Siga a Leadster' items={list4} />
      </div>
      <div className='flex w-full justify-center  border-t border-line-light '>
        <div className='flex justify-between items-center py-6 w-[50%] lg:w-[80%]'>
          <div className='flex text-base-subtitle text-xs font-thin'>
            Copyright © 2015 - 2022 Todos os direitos reservados |
            <Link
              className='flex gap-2 text-blue-dark text-xs font-light'
              href='https://leadster.com.br/'
            >
              Leadster
            </Link>
          </div>
          <div className='flex gap-2 text-base-subtitle text-xs font-thin'>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010 -000 |
            <Link
              className='flex text-base-subtitle text-xs font-light'
              href='/termo-de-uso'
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
