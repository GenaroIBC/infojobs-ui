type ButtonVariant = 'primary' | 'secondary'
type ButtonColor = 'blue' | 'darkblue' | 'orange' | 'gray' | 'green' | 'red' | 'yellow'

const BASE_CLASSNAME = 'rounded-md border-2 py-2 px-4'

const VARIANT_CLASSNAMES: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: ''
}

const COLOR_CLASSNAMES: Record<ButtonColor, string> = {
  blue: 'border-infojobs-blue',
  darkblue: 'border-infojobs-darkblue',
  gray: 'border-infojobs-gray',
  green: 'border-infojobs-green',
  orange: 'border-infojobs-orange',
  red: 'border-infojobs-red',
  yellow: 'border-infojobs-yellow'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', color = 'blue' } = props

  const buttonBackgroundColor =
    variant === 'primary'
      ? `bg-infojobs-${color} text-white`
      : `bg-transparent text-infojobs-${color}`

  console.log({ [color]: buttonBackgroundColor })
  return (
    <button
      {...props}
      className={`${BASE_CLASSNAME} ${VARIANT_CLASSNAMES[variant ?? 'primary']} ${
        COLOR_CLASSNAMES[color ?? 'blue']
      } ${buttonBackgroundColor}`}
    />
  )
}

export const btnBackgrounds = [
  'bg-infojobs-blue',
  'bg-infojobs-gray',
  'bg-infojobs-darkblue',
  'bg-infojobs-orange',
  'bg-infojobs-green',
  'bg-infojobs-yellow',
  'bg-infojobs-red'
]

export const btnColors = [
  'text-infojobs-blue',
  'text-infojobs-darkblue',
  'text-infojobs-gray',
  'text-infojobs-green',
  'text-infojobs-orange',
  'text-infojobs-red',
  'text-infojobs-yellow'
]
