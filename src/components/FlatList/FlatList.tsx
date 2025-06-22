import React from 'react'
import { FlatList as RNFlatList } from 'react-native'
import { Box, Text } from '@gluestack-ui/themed'
import { FlatListProps } from './types'

export function FlatList<T>({
  data,
  keyExtractor,
  renderItem,
  ItemSeparatorComponent,
  itemSeparatorHeight = 12,
  ListEmptyComponent,
  listEmptyText,
  isLoading,
  Skeleton,
  numOfSkeletons = 4,
}: FlatListProps<T>) {
  function DefaultSeparator() {
    return <Box height={itemSeparatorHeight} bg="transparent" />
  }

  const renderSeparator = () =>
    ItemSeparatorComponent ? <ItemSeparatorComponent /> : <DefaultSeparator />

  const renderEmpty = () =>
    ListEmptyComponent ? (
      <ListEmptyComponent />
    ) : (
      <Box py="$4" alignItems="center">
        <Text color="$textDark400">{listEmptyText ?? 'No data found'}</Text>
      </Box>
    )

  if (isLoading) {
    const skeletons = Array(numOfSkeletons).fill(null)

    return (
      <RNFlatList
        data={skeletons}
        keyExtractor={(_, index) => `skeleton-${index}`}
        renderItem={() => <Skeleton />}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    )
  }

  return (
    <RNFlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmpty}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  )
}
