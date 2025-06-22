import { Grocery } from '~/types/grocery'

export type GroceryItemProps = {
  item: Grocery
  onEditGrocery: () => void
  onDeleteGrocery: () => void
}
