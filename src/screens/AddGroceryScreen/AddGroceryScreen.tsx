import React from 'react'
import { Box, Button, ButtonSpinner, Heading, Text } from '@gluestack-ui/themed'
import { Form, FormField } from '~/components'
import { useCustomToast } from '~/hooks'
import { useAddGrocery } from '~/hooks/api/useGroceries'
import { editGrocerySchema } from '~/schemas'

export function AddGroceryScreen() {
  const toast = useCustomToast()
  const { mutateAsync: addGrocery, isPending: isAddingGrocery } =
    useAddGrocery()

  const initialValues = {
    title: '',
    amount: '',
  }

  const onSubmitForm = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    const response = await addGrocery(values)

    if (response) {
      toast({
        text: 'Item added successfully',
        action: 'success',
      })
      resetForm()
    }
  }

  return (
    <Box flex={1} bg="$backgroundDark900" px="$5" py="$6">
      <Heading size="3xl" textAlign="center" color="$textLight100" mb="$8">
        Add Grocery
      </Heading>

      <Form
        initialValues={initialValues}
        validationSchema={editGrocerySchema}
        onSubmit={onSubmitForm}>
        {({ handleSubmit, isValid }) => (
          <Box gap="$6">
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

            <Button
              variant="outline"
              borderColor="$white"
              w="$full"
              onPress={handleSubmit}
              isDisabled={!isValid || isAddingGrocery}
              alignSelf="center">
              {isAddingGrocery && (
                <ButtonSpinner mr="$2" size="small" color="$white" />
              )}
              <Text color="$white" fontWeight="$medium">
                {isAddingGrocery ? 'Adding...' : 'Add Grocery'}
              </Text>
            </Button>
          </Box>
        )}
      </Form>
    </Box>
  )
}
