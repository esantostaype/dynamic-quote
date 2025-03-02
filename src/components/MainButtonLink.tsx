'use client'
import { ArrowRight } from '@phosphor-icons/react'
import { useRouter } from 'next-nprogress-bar'

interface Props {
  label: string
  path: string
}

export const MainButtonLink = ({ label, path }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${path}`)}
      className="group flex font-bold gap-3 items-center px-6 md:px-8 py-3 rounded-[4rem] dyn-gradient md:text-lg text-background"
    >
      {label}
      <div className="group-hover:ml-2 group-hover:-mr-2 transition-all duration-300 ease-in-out">
        <ArrowRight size={20} weight="bold" />
      </div>
    </button>
  )
}
