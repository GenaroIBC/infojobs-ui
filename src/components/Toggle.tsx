import { useId } from 'react'

interface ToggleProps {
  onToggle: (checked: boolean) => void
}

export function Toggle({ onToggle }: ToggleProps) {
  const inputID = useId()

  return (
    <label
      tabIndex={0}
      htmlFor={inputID}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        onChange={(event) => {
          onToggle(event.target.checked)
        }}
        type="checkbox"
        name={inputID}
        id={inputID}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-50 after:rounded-full after:h-5 after:w-5 after:transition-all border border-gray-400 peer-checked:border-infojobs-darkblue peer-checked:bg-infojobs-darkblue"></div>
    </label>
  )
}
