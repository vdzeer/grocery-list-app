import React from 'react'
import { Box, Button, ButtonSpinner, Text } from '@gluestack-ui/themed'
import { ActionsSheet, Form, FormField } from '~/components'
import { useUpdateGrocery } from '~/hooks/api/useGroceries'
import { useCustomToast } from '~/hooks'
import { editGrocerySchema } from '~/schemas'
import { EditGrocerySheetProps } from './types'

export function EditGrocerySheet({
  isOpen,
  onClose,
  grocery,
}: EditGrocerySheetProps) {
  const toast = useCustomToast()
  const { mutateAsync: updateGrocery, isPending: isUpdatingGrocery } =
    useUpdateGrocery()

  if (!grocery) return null

  const initialValues = {
    title: grocery.title ?? '',
    amount: grocery.amount ?? '',
  }

  const onSubmitForm = async (values: typeof initialValues) => {
    const response = await updateGrocery({ id: grocery.id, ...values })

    if (response) {
      toast({
        text: 'Item updated successfully',
        action: 'success',
      })
    }

    onClose()
  }

  return (
    <ActionsSheet
      isOpen={isOpen}
      onClose={onClose}
      title={`Edit "${grocery.title}"`}
      snapPoints={[90]}>
      <Form
        initialValues={initialValues}
        validationSchema={editGrocerySchema}
        onSubmit={onSubmitForm}>
        {({ handleSubmit, isValid }) => (
          <Box w="$3/4">
            <Box gap="$4" mb="$9">
              <FormField
                name="title"
                label="Grocery Title"
                placeholder="e.g. Milk"
              />

              <FormField
                name="amount"
                label="Amount"
                placeholder="e.g. 1L"
                keyboardType="default"
              />
            </Box>

            <Button
              variant="outline"
              borderColor="$white"
              w="$full"
              alignSelf="center"
              alignContent="center"
              onPress={handleSubmit}
              isDisabled={!isValid || isUpdatingGrocery}>
              {isUpdatingGrocery && (
                <ButtonSpinner mr="$2" size="small" color="$white" />
              )}
              <Text color="$white" fontWeight="$medium">
                {isUpdatingGrocery ? 'Saving...' : 'Save Changes'}
              </Text>
            </Button>
          </Box>
        )}
      </Form>
    </ActionsSheet>
  )
}
