type ButtonVariant = 'primary' | 'secondary'
type ButtonColor = 'blue' | 'darkblue' | 'orange' | 'gray' | 'green' | 'red' | 'yellow'

const BASE_CLASSNAME = 'rounded-md border-2 py-2 px-4'

const BUTTON_CLASSNAMES: Record<ButtonColor, Record<ButtonVariant, string>> = {
  blue: {
    primary: 'bg-infojobs-blue border-infojobs-blue',
    secondary: 'text-infojobs-blue'
  },
  darkblue: {
    primary: 'bg-infojobs-darkblue border-infojobs-darkblue',
    secondary: 'text-infojobs-darkblue'
  },
  gray: {
    primary: 'bg-infojobs-gray border-infojobs-gray',
    secondary: 'text-infojobs-gray'
  },
  green: {
    primary: 'bg-infojobs-green border-infojobs-green',
    secondary: 'text-infojobs-green'
  },
  orange: {
    primary: 'bg-infojobs-orange border-infojobs-orange',
    secondary: 'text-infojobs-orange'
  },
  red: {
    primary: 'bg-infojobs-red border-infojobs-red',
    secondary: 'text-infojobs-red'
  },
  yellow: {
    primary: 'bg-infojobs-yellow border-infojobs-yellow',
    secondary: 'text-infojobs-yellow'
  }
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', color = 'blue' } = props

  const primaryVariantClassName = variant === 'primary' ? 'text-white' : 'border-current'

  return (
    <button
      {...props}
      className={`${BASE_CLASSNAME} ${primaryVariantClassName} ${BUTTON_CLASSNAMES[color][variant]}`}
    />
  )
}
