import { Grocery } from '~/types/grocery'

export type EditGrocerySheetProps = {
  isOpen: boolean
  onClose: () => void
  grocery: Grocery | null
}
