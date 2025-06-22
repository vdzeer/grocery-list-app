import { apiClient } from '~/services/api'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERIES } from '~/types/queries'
import { Grocery } from '~/types/grocery'

type GroceryType = Partial<Grocery>

export const useGroceries = () =>
  useQuery({
    queryKey: [QUERIES.GROCERIES],
    queryFn: async () => {
      const response = await apiClient.get('/groceries')
      return response.data
    },
    staleTime: 60 * 1000,
  })

export const useAddGrocery = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (grocery: GroceryType) => {
      const response = await apiClient.post(`/groceries`, {
        ...grocery,
        bought: false,
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.GROCERIES] })
    },
  })
}

export const useUpdateGrocery = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (grocery: GroceryType & { id: number }) => {
      const response = await apiClient.patch(
        `/groceries/${grocery.id}`,
        grocery,
      )
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.GROCERIES] })
    },
  })
}

export const useDeleteGrocery = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.delete(`/groceries/${id}`)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERIES.GROCERIES] })
    },
  })
}
