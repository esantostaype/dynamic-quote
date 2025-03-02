import { Check } from '@phosphor-icons/react'

export interface Props {
  isActive: boolean
  isSuccess: boolean
  icon: React.ReactNode
  className?: string
}

export const StepperItemCircle = ({ isActive, isSuccess, icon, className = '' }: Props) => (
  <div className={`rounded-full ${ isActive ? "border-2 border-accent text-accent" : isSuccess ? "border-2 border-transparent" : "border-2 border-transparent"} ${ className }`}>
    <div className={`size-10 xl:size-12 flex items-center justify-center rounded-full 
      ${ isActive ? "" : isSuccess ? "bg-accent text-background" : "soft-bg-hover text-white"}`}>
      { isSuccess && !isActive ? <Check className="size-4 xl:size-6" size={ 24 } /> : icon }
    </div>
  </div>
)