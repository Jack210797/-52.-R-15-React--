import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

const IdleTimer = () => {
  const [state, setState] = useState<string>('Active')
  const [count, setCount] = useState<number>(0)
  const [remaining, setRemaining] = useState<number>(0)

  const onIdle = () => {
    setState('Idle')
  }

  const onActive = () => {
    setState('Active')
  }

  const onAction = () => {
    setCount(count + 1)
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 10_000,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <p>
        Current State: <b>{state}</b>
      </p>
      <p>
        Action Events: <b>{count}</b>
      </p>
      <p>
        <b>{remaining}</b> seconds remaining
      </p>
    </>
  )
}

export default IdleTimer
