import { createContext, useEffect, useState } from 'react'

export const ZoomContext = createContext()

const getFromLocalStorage = () => {
  const value = localStorage.getItem('timeline-zoom')
  return value || true
}

export const ZoomContextProvider = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(() => {
    return getFromLocalStorage()
  })

  const toogleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  useEffect(() => {
    localStorage.setItem('timeline-zoom', isZoomed)
  }, [isZoomed])

  return (
    <ZoomContext.Provider value={{ isZoomed, toogleZoom }}>
      {children}
    </ZoomContext.Provider>
  )
}
