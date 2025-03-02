'use client'

import { Check } from "@phosphor-icons/react"

interface Props {
  icon: React.ReactNode
  label: string
  isActive: boolean
  isCompleted: boolean
  onClick: () => void
  disabled: boolean
}

export const TabItem = ({ icon, label, isActive, isCompleted, onClick, disabled }: Props) => {
  return (
    <li 
      onClick={ disabled ? undefined : onClick }
      className={`
        flex gap-2 items-center py-2 px-3 rounded leading-tight
        ${ isActive ? 'text-accent bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] cursor-default' : ''}
        ${ isCompleted && !isActive ? 'cursor-pointer hover:bg-[rgba(255,255,255,0.04)]' : ''}
        ${ disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[rgba(255,255,255,0.04)]' }
      `}
    >
      { isCompleted && !isActive ?
        <div className="size-5 bg-accent text-black flex items-center justify-center rounded-full">
          <Check size={ 12 } />
        </div>
        : icon
      }
      { label}
    </li>
  )
}