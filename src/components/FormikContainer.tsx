import { Form, Formik, FormikProps } from 'formik'
import FormikControl from './FormikControl.tsx'
import * as Yup from 'yup'
import Button from './FormComponents/Button.tsx'

const selectOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]

const radioOptions = [
  { key: 'Radio option 1', value: 'Radio1' },
  { key: 'Radio option 2', value: 'Radio2' },
  { key: 'Radio option 3', value: 'Radio3' }
]

const checkboxOptions = [
  { key: 'Checkbox option 1', value: 'checkbox1' },
  { key: 'Checkbox option 2', value: 'checkbox2' },
  { key: 'Checkbox option 3', value: 'checkbox3' }
]

const initialValues = {
  email: '',
  description: '',
  selectOption: '',
  radioOption: '',
  checkboxOption: [],
  date: null
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  description: Yup.string().required('Required'),
  selectOption: Yup.string().required('Required'),
  radioOption: Yup.string().required('Required'),
  checkboxOption: Yup.array().min(1, 'Required'),
  date: Yup.mixed().required('Required')
})

const handleSubmit = (values: any) => {
  console.log('Form data', values)
  console.log('Saved data', JSON.parse(JSON.stringify(values)))
}

const FormikContainer = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formik: FormikProps<any>) => (
        <Form>
          <FormikControl control="input" type="email" label="Email" name="email" placeholder="Enter your email" />
          <FormikControl control="textarea" label="Description" name="description" placeholder="Description" />
          <FormikControl control="select" label="Select an option" name="selectOption" options={selectOptions} />
          <FormikControl control="radio" label="Radio group" name="radioOption" options={radioOptions} />
          <FormikControl control="checkbox" label="Checkbox group" name="checkboxOption" options={checkboxOptions} />
          <FormikControl control="date" label="Date" name="date" placeholder="Pick a date" />
          <Button text="Submit" type="submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
