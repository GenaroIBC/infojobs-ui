type TooltipDirection = 'left' | 'right' | 'top' | 'bottom'

interface TooltipProps extends React.ComponentProps<'span'> {
  children: React.ReactNode
  label: string
  direction?: TooltipDirection
}

const DIRECTION_CLASSNAMES: Record<TooltipDirection, string> = {
  top: 'left-1/2 -translate-x-1/2 -translate-y-1/3 after:-translate-y-[1px] after:w-4 after:h-4 after:[clip-path:polygon(0_0,50%_50%,100%_0)] after:left-1/2 after:-translate-x-1/2 after:top-full bottom-full',
  bottom:
    'left-1/2 -translate-x-1/2 translate-y-1/3 after:translate-y-[1px] after:w-4 after:h-4 after:[clip-path:polygon(0_100%,50%_50%,100%_100%)] after:left-1/2 after:-translate-x-1/2 after:bottom-full top-full',
  left: 'right-full top-1/2 -translate-y-1/2 -translate-x-2 after:-translate-x-[1px] after:w-4 after:h-4 after:[clip-path:polygon(0_0,50%_50%,0_100%)] after:left-full after:top-1/2 after:-translate-y-1/2',
  right:
    'left-full top-1/2 -translate-y-1/2 translate-x-2 after:translate-x-[1px] after:w-4 after:h-4 after:[clip-path:polygon(100%_0,50%_50%,100%_100%)] after:right-full after:top-1/2 after:-translate-y-1/2'
}

const BASE_CLASSNAME =
  'text-xs absolute whitespace-nowrap rounded-sm px-3 py-1 peer-hover:inline-block hidden z-40 bg-[#2D3133] after:bg-[#2D3133] after:content-[""] after:aspect-square after:absolute'

export function Tooltip({ children, label, direction = 'top' }: TooltipProps) {
  return (
    <div className="relative w-fit text-white bg-red-200">
      <span className="peer">{children}</span>

      <span className={`${BASE_CLASSNAME} ${DIRECTION_CLASSNAMES[direction]}`}>{label}</span>
    </div>
  )
}
