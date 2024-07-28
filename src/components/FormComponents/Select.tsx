import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

export interface SelectOption {
  key: string
  value: string
}

export interface SelectProps {
  label: string
  name: string
  options: SelectOption[]

  [key: string]: any
}

const Select = ({ label, name, options, ...rest }: SelectProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label className="font-bold text-sm text-gray-600" htmlFor={name}>
        {label}
      </label>
      <Field className="border rounded p-2" id={name} as="select" type="text" name={name} {...rest}>
        {options.map((option: SelectOption) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
