import Link from 'next/link'
import { Step } from '@/interfaces'
import { StepperItemCircle } from './StepperItemCircle'
import { StepperItemTitle } from './StepperItemTitle'
import { StepperConnectorLine } from './StepperConnectorLine'
import { useRouter } from 'next/navigation'

interface Props {
  step: Step
  isActive: boolean
  isSuccess: boolean
  isLastStep: boolean
}

export const StepperItem = ({ step, isActive, isSuccess, isLastStep }: Props) => {

  const router = useRouter()

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const pageContent = document.querySelector(".page-content")

    pageContent?.classList.remove("enter-page-transition")
      pageContent?.classList.add("exit-page-transition")
      await sleep(300)
      router.push( step.path)
      pageContent?.classList.remove("exit-page-transition")
      pageContent?.classList.add("enter-page-transition")
  }
  
  const StepperItemContent = () => (
    <>
      <StepperItemCircle isActive={ isActive } isSuccess={ isSuccess } icon={ step.icon } />
      <StepperItemTitle title={ step.title } isActive={ isActive } />
    </>
  )

  return (
    <li className="group relative flex flex-1 last:flex-initial">
      { isSuccess ? (
        <Link href={ step.path } onClick={ handleTransition } className="flex justify-center flex-col items-center hover:text-accent">
          <StepperItemContent />
        </Link>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <StepperItemContent />
        </div>
      )}
      { !isLastStep && <StepperConnectorLine isActive={ isActive } isSuccess={ isSuccess } />}
    </li>
  )
}