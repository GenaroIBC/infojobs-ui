import { useEffect, useState } from 'react'
import { Button } from './Button'

type AllOrNone<T> = Required<T> | Partial<Record<keyof T, undefined>>

type ModalProps = {
  children: React.ReactNode
  onClose?: () => void
  openModalButtonText: string
  title?: string
  closeOnBackdropClick?: boolean
  closeOnEscClick?: boolean
} & AllOrNone<{
  onConfirm: () => void
  onCancel: () => void
}>

export function Modal({
  children,
  onClose,
  openModalButtonText,
  title,
  onCancel,
  onConfirm,
  closeOnBackdropClick,
  closeOnEscClick
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    if (!(closeOnEscClick ?? false)) return

    const closeModalOnESCClick = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keyup', closeModalOnESCClick)

    return () => {
      document.removeEventListener('keyup', closeModalOnESCClick)
    }
  }, [])

  return (
    <>
      <Button
        onClick={() => {
          handleOpenModal()
        }}
      >
        {openModalButtonText}
      </Button>

      {isOpen && (
        <div className="fixed p-4 inset-0 flex items-center justify-center z-50">
          <>
            <div
              onClick={
                closeOnBackdropClick ?? false
                  ? () => {
                      handleCloseModal()
                    }
                  : undefined
              }
              className="fixed inset-0 bg-black opacity-50"
            ></div>
            <div className="relative">
              <article className="max-h-[90vh] max-w-[1000px] bg-gray-50 rounded-md shadow-md z-10 overflow-auto">
                {title != null && (
                  <span className="block border-b border-gray-400 p-4 font-medium text-lg">
                    {title}
                  </span>
                )}
                <button
                  className="absolute top-0 m-2 right-0 z-50 p-4 text-infojobs-blue rounded-xl"
                  onClick={() => {
                    handleCloseModal()
                    onClose?.()
                  }}
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

                <div className="p-4">{children}</div>

                {onCancel != null && onConfirm != null && (
                  <nav className="p-4 pt-0 flex items-center justify-end gap-2">
                    <Button
                      color="green"
                      onClick={() => {
                        handleCloseModal()
                        onConfirm()
                      }}
                    >
                      Confirm
                    </Button>
                    <Button
                      color="red"
                      variant="secondary"
                      onClick={() => {
                        handleCloseModal()
                        onCancel()
                      }}
                    >
                      Cancel
                    </Button>
                  </nav>
                )}
              </article>
            </div>
          </>
        </div>
      )}
    </>
  )
}
