import { useCallback, useSyncExternalStore } from 'react'

const getServerSnapshot = () => false

const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query)

      matchMedia.addEventListener('change', callback)

      return () => {
        matchMedia.removeEventListener('change', callback)
      }
    },
    [query],
  )

  const getSnapshot = () => window.matchMedia(query).matches

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export { useMediaQuery }
