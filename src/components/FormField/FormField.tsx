import React from 'react'
import { Box, Input, InputField, Text } from '@gluestack-ui/themed'
import { useField } from 'formik'
import { FormFieldProps } from './types'

export function FormField({
  name,
  label,
  placeholder,
  keyboardType = 'default',
}: FormFieldProps) {
  const [field, meta, helpers] = useField(name)

  return (
    <Box>
      <Text mb="$1" color="$textLight100" fontWeight="$medium">
        {label}
      </Text>
      <Input variant="outline" borderColor="$borderDark700">
        <InputField
          value={field.value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={helpers.setValue}
          onBlur={() => helpers.setTouched(true)}
        />
      </Input>
      {meta.touched && meta.error && (
        <Text mt="$1" color="$red500" fontSize="$xs">
          {meta.error}
        </Text>
      )}
    </Box>
  )
}
