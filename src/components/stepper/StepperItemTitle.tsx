interface Props {
  title: string
  isActive: boolean
}

export const StepperItemTitle = ({ title, isActive }: Props) => (
  <div className="-bottom-6 hidden xl:block absolute">
    <div className={`text-nowrap text-sm ${isActive ? 'text-accent' : ''}`}>
      { title }
    </div>
  </div>
)