import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <div className="fixed flex items-center gap-2 top-4 left-6">
        <Image src="/images/iso.svg" width="27" height="32" alt="Dynamic Studio" className="hidden xl:block"/>
        <Image src="/images/logo.svg" width="186" height="32" alt="Dynamic Studio" className="hidden 2xl:block"/>
      </div>
    </header>
  )
}