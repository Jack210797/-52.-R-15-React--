import { FC, MouseEventHandler } from 'react'
import ModalIdle from '../helpers/ModalIdle'

interface ToastIdleTimerProps {
  openIdleTimer: MouseEventHandler<HTMLButtonElement>
}

const handleClick = () => {
  return <ModalIdle />
}

const ToastIdleTimer: FC<ToastIdleTimerProps> = () => {
  return (
    <div className="w">
      <button
        onClick={handleClick}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        <ModalIdle />
      </button>
    </div>
  )
}

export default ToastIdleTimer
