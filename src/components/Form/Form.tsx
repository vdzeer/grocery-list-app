import { Formik, FormikValues } from 'formik'
import React from 'react'

import { FormProps } from './types'

export function Form<T extends FormikValues>({
  initialValues,
  validationSchema,
  enableReinitialize,
  children,
  onSubmit,
}: FormProps<T>) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
      onSubmit={onSubmit}>
      {({ handleSubmit, isValid, values, setFieldValue, errors, touched }) =>
        children({
          handleSubmit,
          isValid,
          values,
          setFieldValue,
          errors,
          touched,
        })
      }
    </Formik>
  )
}
