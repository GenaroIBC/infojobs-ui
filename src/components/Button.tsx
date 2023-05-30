type ButtonVariant = 'primary' | 'secondary'
type ButtonColor = 'blue' | 'darkblue' | 'orange' | 'gray' | 'green' | 'red' | 'yellow'

const BASE_CLASSNAME = 'rounded-md border-2 py-2 px-4'

const BUTTON_CLASSNAMES: Record<ButtonColor, Record<ButtonVariant, string>> = {
  blue: {
    primary: 'bg-infojobs-blue',
    secondary: 'text-infojobs-blue border-infojobs-blue'
  },
  darkblue: {
    primary: 'bg-infojobs-darkblue',
    secondary: 'text-infojobs-darkblue border-infojobs-darkblue'
  },
  gray: {
    primary: 'bg-infojobs-gray',
    secondary: 'text-infojobs-gray border-infojobs-gray'
  },
  green: {
    primary: 'bg-infojobs-green',
    secondary: 'text-infojobs-green border-infojobs-green'
  },
  orange: {
    primary: 'bg-infojobs-orange',
    secondary: 'text-infojobs-orange border-infojobs-orange'
  },
  red: {
    primary: 'bg-infojobs-red',
    secondary: 'text-infojobs-red border-infojobs-red'
  },
  yellow: {
    primary: 'bg-infojobs-yellow',
    secondary: 'text-infojobs-yellow border-infojobs-yellow'
  }
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', color = 'blue' } = props

  const primaryVariantClassName = variant === 'primary' ? 'text-white' : ''

  return (
    <button
      {...props}
      className={`${BASE_CLASSNAME} ${primaryVariantClassName} ${BUTTON_CLASSNAMES[color][variant]}`}
    />
  )
}
