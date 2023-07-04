// font
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

// style
import 'tailwindcss/tailwind.css'

// components
import { Header } from '../components/header'
import { Footer } from '@/components/footer'
import { SecondaryBoard } from '@/components/secondaryBoard'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata = {
  title: 'Leadster - Videos',
  description: 'Leadster - Front-end Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${plus_jakarta_sans.variable} flex flex-col flex-1`}>
        <div className='flex flex-col gap-2'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
