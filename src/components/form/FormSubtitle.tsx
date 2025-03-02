interface Props {
  subtitle: string
}

export const FormSubtitle = ({ subtitle }: Props) => {
  return (
    <h3 className="first:mt-0 text-xl mt-10 mb-6 font-medium">{ subtitle }</h3>
  )
}