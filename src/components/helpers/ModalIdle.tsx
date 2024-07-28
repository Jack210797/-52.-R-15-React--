import { useRef, useState } from 'react'
import Modal from 'react-modal'
import IdleTimer from './IdleTimer'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#modal-root')

const ModalIdle = () => {
  const subtitle = useRef<HTMLHeadingElement>(null)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    if (subtitle.current) subtitle.current.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 bg-white p-6  border rounded"
      >
        <h2 ref={subtitle} className="text-2xl font-bold text-center mb-3">
          Idle Timer
        </h2>
        <IdleTimer />
        <button
          onClick={closeModal}
          className=" my-4  border px-1.5 py-2 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded w-full"
        >
          Close Timer
        </button>
      </Modal>
    </div>
  )
}

export default ModalIdle
