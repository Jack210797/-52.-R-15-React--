import { Form, Formik, FormikProps } from 'formik'
import FormikControl from './FormikControl'
import Button from './FormComponents/Button'
import * as Yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CustomToastReboot from './toast/CustomToastReboot'
import ToastIdleTimer from './toast/ToastIdleTimer'
import IdleTimer from './helpers/IdleTimer'

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Логін повинен містити не менше 3 символів')
    .max(15, 'Логін повинен містити не більше 15 символів')
    .required('Логін є обов’язковим полем'),
  password: Yup.string()
    .min(6, 'Пароль повинен містити не менше 6 символів')
    .max(20, 'Пароль повинен містити не більше 20 символів')
    .required('Пароль є обов’язковим полем'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі повинні співпасти')
    .required('Підтвердження паролю є обов’язковим полем'),
  email: Yup.string().email('Введіть коректний email').required('Email є обов’язковим полем')
})

const initialValues = { username: '', password: '', confirmPassword: '', email: '' }

const handleSubmit = (values: any) => {
  console.log(values)
}

const FormikLogin = () => {
  const notify = () => {
    toast.success('Congratulations! You did it!', { position: 'bottom-right', hideProgressBar: false, autoClose: 3000 })
    toast.info(<ToastIdleTimer openIdleTimer={() => <IdleTimer />} />, {
      position: 'bottom-right',
      autoClose: false,
      delay: 1000
    })
    toast(<CustomToastReboot rebootPage={() => window.location.reload()} />, {
      position: 'bottom-right',
      autoClose: false,
      delay: 3000
    })
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formik: FormikProps<any>) => (
        <Form>
          <FormikControl
            control="input"
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <FormikControl control="input" label="Email" name="email" type="email" placeholder="Email address" />
          <FormikControl control="input" label="Password" name="password" type="password" placeholder="Password" />
          <FormikControl
            control="input"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Please enter your password again"
          />
          <Button
            text="Login"
            type="submit"
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            onClick={notify}
          />
          <ToastContainer />
        </Form>
      )}
    </Formik>
  )
}

export default FormikLogin
