import FormikLogin from './components/FormikLogin'
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-3xl mb-5 text-center font-bold">Sign in</h1>
          <p className="text-gray-500">Sign in to access your account</p>
        </div>
        <FormikLogin />
      </div>
    </div>
  )
}

export default App
