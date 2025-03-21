interface Props {
  icon: React.ReactNode
  label: string
  value: string
  editable?: boolean;
  onChange?: ( newValue: string ) => void
}

export const StatItem = ({ icon, label, value, editable = false, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div>
        { icon }
      </div>
      <div className="relative">
        <div className="uppercase font-semibold text-xs text-gray-400 leading-tight">{ label }</div>
        { editable ? (
          <>
            <span className="absolute left-0 bottom-[-2px] text-lg font-bold">$</span>
            <input
              type="text"
              value={ value }
              onChange={(e) => onChange && onChange( e.target.value )}
              className="pl-3 leading-tight text-lg font-bold bg-transparent border-b border-border focus:outline-none"
            />
          </>
        ) : (
          <div className="leading-tight text-lg font-bold">{ value }</div>
        )}
      </div>
    </div>
  )
}