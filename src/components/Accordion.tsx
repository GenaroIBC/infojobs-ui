import { useState } from 'react'

interface AccordionProps {
  items: AccordionItemProps[]
}

export function Accordion({ items }: AccordionProps) {
  return (
    <ul>
      {items.map((item) => (
        <AccordionItem key={item.label} {...item} />
      ))}
    </ul>
  )
}

interface AccordionItemProps {
  label: string
  element: React.ReactNode
}

function AccordionItem({ label, element }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="rounded-sm bg-gray-50 flex flex-col gap-0">
      <button
        className="w-full flex gap-2 justify-between items-center px-4 py-2 m-0 border-2 border-gray-300"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
      >
        <span className="truncate">{label}</span>
        <svg
          className={`${isOpen ? 'rotate-180' : ''} transition-transform`}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.707 3.14713e-05C6.451 3.14713e-05 6.195 0.098031 6 0.293031L0 6.29303L1.414 7.70703L6.707 2.41403L12 7.70703L13.414 6.29303L7.414 0.293031C7.219 0.098031 6.963 3.14713e-05 6.707 3.14713e-05Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {isOpen ? <li className="px-4 py-2 hover:bg-gray-200 bg-gray-50">{element}</li> : null}
    </article>
  )
}
