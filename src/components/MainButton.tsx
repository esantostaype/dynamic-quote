'use client'
import { ArrowRight } from '@phosphor-icons/react'

interface Props {
  type?: "button" | "submit" | "reset" | undefined
  label: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const MainButton = ({ label, onClick, type = "button" }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group flex font-bold gap-3 items-center px-6 pr-5 md:px-8 md:pr-7 py-3 rounded-[4rem] dyn-gradient md:text-lg text-background"
    >
      {label}
      <div className="group-hover:ml-2 group-hover:-mr-2 transition-all duration-300 ease-in-out">
        <ArrowRight size={20} weight="bold" />
      </div>
    </button>
  )
}