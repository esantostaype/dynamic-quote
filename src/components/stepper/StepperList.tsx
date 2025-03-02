'use client'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'
import { stepsData } from '@/data'
import { StepperItem } from './StepperItem'

export const StepperList = () => {
  const pathname = usePathname()
  
  return (
    <ul className="flex items-start z-50 justify-between w-full">
      { stepsData.map(( step, index ) => {
        const isActive = pathname === step.path
        const isSuccess = !!Cookies.get(`${ step.key }`)
        const isLastStep = index === stepsData.length - 1

        return (
          <StepperItem
            key={ index }
            step={ step }
            isActive={ isActive }
            isSuccess={ isSuccess }
            isLastStep={ isLastStep }
          />
        )
      })}
    </ul>
  )
}