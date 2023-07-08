// font
import { Plus_Jakarta_Sans } from 'next/font/google'

// style
import 'tailwindcss/tailwind.css'

// components
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PlayerModal } from '@/components/modal/player'

//context
import { PaginationVideosSelect } from '@/contexts/pagination/videos'
import { PlayerViewControlContext } from '@/contexts/player'

// fonts
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

// metadata
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
      <PlayerViewControlContext>
        <PaginationVideosSelect>
          <body
            className={`${plus_jakarta_sans.variable} flex flex-col w-full`}
          >
            <div className='flex flex-col gap-2'>
              <Header />
              {children}
              <Footer />
            </div>
            <PlayerModal />
          </body>
        </PaginationVideosSelect>
      </PlayerViewControlContext>
    </html>
  )
}
