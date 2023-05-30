interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed p-4 inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative">
        <article className="max-h-[90vh] bg-gray-50 rounded-md p-4 shadow-md z-10 overflow-auto">
          {children}

          <button
            className="absolute top-0 right-0 z-50 p-4 text-infojobs-blue rounded-md"
            onClick={onClose}
          >
            <svg
              width="1rem"
              height="1rem"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/close">
                <path
                  id="vector"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M62.1209 14.1194L57.8789 9.87744L35.9999 31.7564L14.1209 9.87744L9.87891 14.1194L31.7579 35.9984L9.87891 57.8774L14.1209 62.1194L35.9999 40.2434L57.8789 62.1194L62.1209 57.8774L40.2419 35.9984L62.1209 14.1194Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>
        </article>
      </div>
    </div>
  )
}
