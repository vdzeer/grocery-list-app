import { ReactNode } from 'react'
import { FlatListProps as DefaultFlatListProps } from 'react-native'

export type FlatListProps<T> = {
  data: T[]
  keyExtractor: (item: T, index: number) => string
  renderItem: ({ item, index }: { item: T; index: number }) => ReactNode
  ItemSeparatorComponent?: () => ReactNode
  itemSeparatorHeight?: number
  ListEmptyComponent?: () => ReactNode
  listEmptyText?: string
  isLoading: boolean
  Skeleton: () => ReactNode
  numOfSkeletons?: number
} & DefaultFlatListProps<T>
