import { Grocery } from '~/types/grocery'

export type DeleteGrocerySheetProps = {
  isOpen: boolean
  onClose: () => void
  grocery: Grocery | null
}
