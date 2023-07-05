// vendors
import Image from 'next/image'
import Link from 'next/link'

// assets
import logo from '@/assets/logo.png'

// components
import { ListFooter } from './list'

export function Footer() {
  const linksList = [
    {
      id: 0,
      name: 'Home',
      link: '/',
      type: 'link',
    },
    {
      id: 1,
      name: 'Ferramentas',
      link: '/tools-page',
      type: 'link',
    },
    {
      id: 2,
      name: 'Preços',
      link: '/prices',
      type: 'link',
    },
    {
      id: 3,
      name: 'Contato',
      link: '/contact',
      type: 'link',
    },
  ]
  const caseList = [
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
  const materialsList = [
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
      link: '/guide',
      type: 'link',
    },
    {
      id: 3,
      name: 'Materiais Gratuitos',
      link: '/free-materials',
      type: 'link',
    },
  ]
  const contactsList = [
    {
      id: 0,
      name: 'social media',
      link: '',
      type: 'socialMedia',
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
    <div className='flex flex-col w-full  justify-center items-center gap-8 mt-4'>
      <Link
        href='/'
        className='flex flex-col  justify-center items-center w-[50%] lg:w-[80%]'
      >
        <Image className='flex w-40' src={logo} alt='' />
        <span className='text-base-subtitle text-[0.55rem]'>
          Transformando visitantes em clientes.
        </span>
      </Link>
      <div className='flex justify-between items-start mb-8  w-[50%] lg:w-[80%]'>
        <ListFooter title='Links Principais' items={linksList} />
        <ListFooter title='Cases' items={caseList} />
        <ListFooter title='Materiais' items={materialsList} />
        <ListFooter title='Siga a Leadster' items={contactsList} />
      </div>
      <div className='flex w-full justify-center   border-t border-line-light '>
        <div className='flex justify-between items-center py-6 w-[50%] lg:w-[80%]'>
          <div className='flex gap-1 font-primary text-base-subtitle text-xs font-thin'>
            Copyright © 2015 - 2022 Todos os direitos reservados |
            <Link
              className='flex gap-2 font-primary text-blue-dark text-xs font-light hover:text-blue-light  transition duration-300'
              href='https://leadster.com.br/'
            >
              Leadster
            </Link>
          </div>
          <div className='flex gap-1 font-primary text-base-subtitle text-xs font-thin'>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010 -000 |
            <Link
              className='flex font-primary text-base-subtitle text-xs font-light hover:text-blue-light  transition duration-300'
              href='https://leadster.com.br/termos_de_uso/'
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
