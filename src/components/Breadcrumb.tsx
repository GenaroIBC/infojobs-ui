interface BreadcrumbProps {
  items: string[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav>
      <ul className="flex gap-2 items-center">
        {items.map((item) => (
          <li
            // eslint-disable-next-line no-octal-escape
            className="hover:text-infojobs-blue hover:after:text-black whitespace-nowrap truncate after:content-['\2303'] after:rotate-90 after:inline-block last-of-type:after:content-none"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}
