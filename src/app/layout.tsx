import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import { Providers } from './providers'
import { Header, StepperList } from '@/components'

export const metadata: Metadata = {
  title: "Survey to Understand the Digital Needs of Businesses",
  icons: {
    icon: '/images/iso.svg'
  }
}

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <main className="relative z-30 flex flex-col h-[calc(100vh-4.5rem)] gap-4 md:gap-8 xl:gap-12 max-w-6xl mx-auto p-4 md:p-8">
            <div className="flex items-center gap-8">
              <Image src="/images/iso.svg" width="27" height="32" alt="Dynamic Studio" className="hidden md:block xl:hidden"/>
              <StepperList/>
            </div>
            <div className="page-content flex flex-1 overflow-y-auto border border-border bg-[rgba(10,10,32,0.6)] backdrop-blur-xl rounded-2xl">
              { children }
            </div>
          </main>
          <div className="z-10 fixed -bottom-[640px] left-1/2 -translate-x-1/2 size-[1280px] bg-[rgb(0,255,255)] blur-[480px] rounded-full opacity-10">
          </div>
          <video autoPlay muted loop poster="/images/dynamic-studio-waves.webp" preload="auto" className="background-wrapper fixed -z-10 h-dvh w-full top-0 left-0 opacity-60 object-cover">
            <source src="/images/dynamic-studio-waves.mp4" />
          </video>
        </Providers>
      </body>
    </html>
  )
}