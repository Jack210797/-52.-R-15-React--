import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

interface InputProps {
  label: string
  name: string

  [key: string]: any
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label className="font-bold text-sm text-gray-600" htmlFor={name}>
        {label}
      </label>
      <Field id={name} type="text" name={name} {...rest} className="border rounded p-2" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
