import * as Yup from 'yup'

export const editGrocerySchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  amount: Yup.string().required('Amount is required'),
})
