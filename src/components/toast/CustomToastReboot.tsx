import { FC, MouseEventHandler } from 'react'

interface CustomToastProps {
  rebootPage: MouseEventHandler<HTMLButtonElement>
}

const CustomToastReboot: FC<CustomToastProps> = ({ rebootPage }) => {
  return (
    <div className="w">
      <button
        onClick={rebootPage}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Reboot Page
      </button>
    </div>
  )
}

export default CustomToastReboot
