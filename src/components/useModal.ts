import { useState } from 'react'

export function useModal(): [boolean, () => void, () => void] {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return [isOpen, openModal, closeModal]
}
