import { ReactNode } from 'react'

export type ActionsSheetProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  snapPoints?: number[]
}
