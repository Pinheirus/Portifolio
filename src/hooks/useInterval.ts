import { useCallback, useEffect, useRef } from 'react'

interface UseIntervalParams {
  callback: () => unknown
  delay: number
  enabled?: boolean
}

export function useInterval({ callback, delay, enabled = true }: UseIntervalParams) {
  const intervalRef = useRef<number >()
  const savedCallback = useRef<() => unknown >()

  const tick = useCallback(() => {
    savedCallback.current && savedCallback.current()
  }, [])

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(tick, delay)
  }, [delay, tick])

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay && enabled) {
      intervalRef.current = setInterval(tick, delay)
      return () => clearInterval(intervalRef.current)
    }
  }, [delay, enabled, tick])

  return {
    resetInterval
  }
}