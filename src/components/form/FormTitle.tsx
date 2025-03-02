interface Props {
  title: string
}

export const FormTitle = ({ title }: Props) => {
  return (
    <h2 className="text-3xl md:text-4xl mb-2 font-semibold leading-none">{ title }</h2>
  )
}