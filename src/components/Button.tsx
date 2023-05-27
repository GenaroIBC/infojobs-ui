type ButtonVariant = 'primary' | 'secondary'

const BASE_CLASSNAME =
  'rounded-md border-2 py-2 px-4 hover:border-infojobs-blue border-infojobs-darkblue'

const CLASSNAMES: Record<ButtonVariant, string> = {
  primary: 'hover:bg-infojobs-blue bg-infojobs-darkblue text-white',
  secondary:
    'bg-transparent hover:text-infojobs-blue text-infojobs-darkblue hover:text-infojobs-blue'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

export function Button(props: ButtonProps) {
  return <button {...props} className={`${BASE_CLASSNAME} ${CLASSNAMES[props.variant]}`} />
}
