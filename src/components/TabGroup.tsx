import { useState } from 'react'

interface Tab {
  element: React.ReactNode
  title: string
  id: React.Key
}

interface TabGroupProps {
  tabs: Tab[]
}

export function TabGroup({ tabs }: TabGroupProps) {
  const [visibleTabID, setVisibleTabID] = useState(tabs[0]?.id)

  return (
    <section className="border-2 border-gray-300 rounded-sm">
      <nav className="flex items-center bg-gray-200">
        {tabs.map(({ title, id }) => (
          <button
            onClick={() => {
              setVisibleTabID(id)
            }}
            className={`${
              visibleTabID === id ? 'border-infojobs-blue bg-gray-100' : 'border-gray-300'
            } border-b-4 px-4 py-2`}
            key={id}
          >
            {title}
          </button>
        ))}
      </nav>
      <article className="border bg-gray-100 p-4 rounded-sm max-w-full overflow-auto">
        {tabs.find((tab) => tab.id === visibleTabID)?.element}
      </article>
    </section>
  )
}
