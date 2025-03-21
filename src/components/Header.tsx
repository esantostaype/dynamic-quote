'use client'
import Image from 'next/image'
import { Clock, CurrencyDollar, Wallet } from '@phosphor-icons/react'
import { StatItem } from '@/components'

export const Header = () => {
  return (
    <header className="sticky h-[4.5rem] flex items-center justify-between top-0 left-0 w-full py-4 px-8 border-b border-b-border">
      <div className="flex items-center gap-2">
        <Image src="/images/iso.svg" width="27" height="32" alt="Dynamic Studio" className="hidden xl:block"/>
        <Image src="/images/logo.svg" width="186" height="32" alt="Dynamic Studio" className="hidden 2xl:block"/>
      </div>
      <div className="flex items-center gap-8">
      <StatItem icon={ <Clock size={ 36 } weight="thin" /> } label='Estimated Time' value='5 months 1 week' />
      <StatItem icon={ <CurrencyDollar size={ 36 } weight="thin" /> } label='Total Amount' value='$18,400' />
      <StatItem icon={ <Wallet size={ 36 } weight="thin" /> } label='Your Budget' editable value='' />
      </div>
    </header>
  )
}