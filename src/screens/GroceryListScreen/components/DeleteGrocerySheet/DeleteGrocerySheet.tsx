import React from 'react'
import { Button, ButtonSpinner, Text } from '@gluestack-ui/themed'
import { ActionsSheet } from '~/components'
import { useDeleteGrocery } from '~/hooks/api/useGroceries'
import { useCustomToast } from '~/hooks'
import { DeleteGrocerySheetProps } from './types'

export function DeleteGrocerySheet({
  isOpen,
  onClose,
  grocery,
}: DeleteGrocerySheetProps) {
  const toast = useCustomToast()
  const { mutateAsync: deleteGrocery, isPending: isDeletingGrocery } =
    useDeleteGrocery()

  const handlePressDelete = async () => {
    if (grocery) {
      const response = await deleteGrocery(grocery.id)
      if (response) {
        toast({
          text: 'Item deleted successfully',
          action: 'success',
        })
      }
      onClose()
    }
  }

  return (
    <ActionsSheet
      isOpen={isOpen}
      onClose={onClose}
      title={`Delete "${grocery?.title}"?`}>
      <Button
        variant="outline"
        borderColor="$red500"
        w="$3/4"
        onPress={handlePressDelete}
        isDisabled={isDeletingGrocery}>
        {isDeletingGrocery && (
          <ButtonSpinner mr="$2" size="small" color="$red500" />
        )}
        <Text color="$red500" fontWeight="$medium">
          {isDeletingGrocery ? 'Deleting...' : 'Yes, Delete'}
        </Text>
      </Button>
    </ActionsSheet>
  )
}
