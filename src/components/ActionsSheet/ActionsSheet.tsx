import React from 'react'
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  Box,
  Button,
  Text,
} from '@gluestack-ui/themed'
import { ActionsSheetProps } from './types'

export function ActionsSheet({
  isOpen,
  onClose,
  title,
  children,
  snapPoints = [30],
}: ActionsSheetProps) {
  if (!isOpen) return null

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={snapPoints}>
      <ActionsheetBackdrop />
      <ActionsheetContent bg="$backgroundDark800">
        {title && (
          <Box
            px="$4"
            mt="$4"
            mb="$7"
            pb="$1"
            borderBottomWidth={1}
            borderColor="$borderDark400">
            <Text size="xl" color="$textLight100" fontWeight="$medium">
              {title}
            </Text>
          </Box>
        )}

        {children}

        <Button
          variant="outline"
          borderColor="$borderDark500"
          w="$3/4"
          mt="$4"
          onPress={onClose}>
          <Text color="$textLight400" fontWeight="$medium">
            Cancel
          </Text>
        </Button>
      </ActionsheetContent>
    </Actionsheet>
  )
}
