import { FormikErrors, FormikHelpers, FormikValues } from 'formik'
import { ReactNode } from 'react'

export type FormProps<T extends FormikValues> = {
  initialValues: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema: any
  children: (props: {
    handleSubmit: () => void
    isValid: boolean
    values: T
    errors: FormikErrors<T>
    touched: FormikValues
    setFieldValue: (
      field: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any,
      shouldValidate?: boolean,
    ) => Promise<void | FormikErrors<T>>
  }) => ReactNode
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void
  enableReinitialize?: boolean
}
