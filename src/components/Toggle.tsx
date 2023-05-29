interface ToggleProps {
  onToggle: (checked: boolean) => void
}

export function Toggle({ onToggle }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        onChange={(event) => {
          onToggle(event.target.checked)
        }}
        type="checkbox"
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-50 after:rounded-full after:h-5 after:w-5 after:transition-all border-2 border-gray-400 peer-checked:border-infojobs-darkblue peer-checked:bg-infojobs-darkblue"></div>
    </label>
  )
}
