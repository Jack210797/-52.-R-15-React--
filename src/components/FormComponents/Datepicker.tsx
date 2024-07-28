import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import ReactDatepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { uk } from 'date-fns/locale/uk'

export interface DatepickerProps {
  label: string
  name: string

  [key: string]: any
}

const Datepicker = ({ label, name, ...rest }: DatepickerProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-4">
      <label className="font-bold text-sm text-gray-600" htmlFor={name}>
        {label}
      </label>
      <Field id={name} type="text" name={name} {...rest}>
        {({ field, form }: any) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <ReactDatepicker
              portalId="root portal"
              id={name}
              {...field}
              {...rest}
              selected={value}
              placeholderText={rest.placeholder}
              onChange={(val) => setFieldValue(name, val)}
              locale={uk}
              dateFormat="dd.MM.yyyy"
              className="border rounded p-2 min-w-[250px]"
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Datepicker
