import React, { useState, useMemo } from 'react'
import { Box, Heading } from '@gluestack-ui/themed'

import { FlatList, GroceryItem } from '~/components'
import { useGroceries } from '~/hooks/api/useGroceries'
import { Grocery } from '~/types/grocery'
import { GroceriesSkeleton } from '~/skeletons'
import { DeleteGrocerySheet, EditGrocerySheet } from './components'

export function GroceryListScreen() {
  const { data: groceries = [], isLoading } = useGroceries()

  const [selectedItem, setSelectedItem] = useState<Grocery | null>(null)
  const [activeSheet, setActiveSheet] = useState<'edit' | 'delete' | null>(null)

  const openEditSheet = (item: Grocery) => {
    setSelectedItem(item)
    setActiveSheet('edit')
  }

  const openDeleteSheet = (item: Grocery) => {
    setSelectedItem(item)
    setActiveSheet('delete')
  }

  const closeSheet = () => {
    setActiveSheet(null)
    setSelectedItem(null)
  }

  const sortedGroceries = useMemo(
    () => [...groceries].sort((a, b) => Number(a.bought) - Number(b.bought)),
    [groceries],
  )

  return (
    <Box flex={1} bg="$backgroundDark900" px="$4" py="$5">
      <Heading size="3xl" mb="$6" textAlign="center" color="$textLight100">
        Grocery List
      </Heading>

      <FlatList<Grocery>
        isLoading={isLoading}
        data={sortedGroceries}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <GroceryItem
            item={item}
            onEditGrocery={() => openEditSheet(item)}
            onDeleteGrocery={() => openDeleteSheet(item)}
          />
        )}
        listEmptyText="No groceries yet."
        Skeleton={GroceriesSkeleton}
      />

      <EditGrocerySheet
        grocery={selectedItem}
        isOpen={activeSheet === 'edit'}
        onClose={closeSheet}
      />

      <DeleteGrocerySheet
        grocery={selectedItem}
        isOpen={activeSheet === 'delete'}
        onClose={closeSheet}
      />
    </Box>
  )
}
