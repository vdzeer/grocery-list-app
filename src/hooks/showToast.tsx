import React from 'react'
import { Toast, ToastTitle, useToast } from '@gluestack-ui/themed'

export const useCustomToast = () => {
  const toast = useToast()

  return ({
    text,
    action = 'success',
    variant = 'accent',
    duration = 3000,
  }: {
    text: string
    action?: 'success' | 'error' | 'info' | 'warning' | 'attention'
    variant?: 'outline' | 'solid' | 'accent'
    duration?: number
  }) => {
    toast.show({
      placement: 'top',
      duration,
      render: ({ id }) => (
        <Toast nativeID={`toast-${id}`} action={action} variant={variant}>
          <ToastTitle>{text}</ToastTitle>
        </Toast>
      ),
    })
  }
}
