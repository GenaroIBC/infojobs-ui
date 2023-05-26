type ButtonVariant = 'primary' | 'secondary'

const baseClassName =
  'rounded-md border-2 py-2 px-4 border-blue-500 hover:border-blue-400 text-white'

const classNames: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 hover:bg-blue-400',
  secondary: 'bg-transparent'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

export function Button(props: ButtonProps) {
  return <button {...props} className={`${baseClassName} ${classNames[props.variant]}`} />
}
