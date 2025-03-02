import { FormTitle } from '@/components'

interface Props {
  children: React.ReactNode
  title: string
  description?: string
}

export const TabContentTemplate = ({ children, title, description }: Props) => {
  return (
    <>
    <div className="mb-12">
      <FormTitle title={ title } />
      <p className="text-lg">{ description }</p>
    </div>
    <div className="flex-1 flex flex-col">
      { children }
    </div>
    </>
  )
}