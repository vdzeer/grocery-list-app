import React from 'react'
import {
  HStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Button,
  ButtonIcon,
  Icon,
  Text,
} from '@gluestack-ui/themed'
import { CheckIcon, TrashIcon, PencilIcon } from 'lucide-react-native'

import { useUpdateGrocery } from '~/hooks/api/useGroceries'
import { GroceryItemProps } from './types'

export function GroceryItem({
  item,
  onEditGrocery,
  onDeleteGrocery,
}: GroceryItemProps) {
  const { mutateAsync: updateGrocery } = useUpdateGrocery()

  const toggleBought = async () => {
    await updateGrocery({ id: item.id, bought: !item.bought })
  }

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="$backgroundDark950"
      p="$3"
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderDark700">
      <Checkbox
        size="md"
        value={String(item.id)}
        isChecked={item.bought}
        onChange={toggleBought}>
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} color="$textLight100" />
        </CheckboxIndicator>
        <CheckboxLabel ml="$2">
          <Text
            strikeThrough={item.bought}
            color={item.bought ? '$textDark500' : '$textLight100'}>
            {item.title} ({item.amount})
          </Text>
        </CheckboxLabel>
      </Checkbox>

      <HStack space="sm" alignItems="center">
        <Button size="sm" variant="link" onPress={onEditGrocery}>
          <ButtonIcon>
            <Icon as={PencilIcon} size="sm" color="$textLight400" />
          </ButtonIcon>
        </Button>
        <Button size="sm" variant="link" onPress={onDeleteGrocery}>
          <ButtonIcon>
            <Icon as={TrashIcon} size="sm" color="$red500" />
          </ButtonIcon>
        </Button>
      </HStack>
    </HStack>
  )
}
