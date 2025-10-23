import { useEffect, useState } from 'react'

export const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setPrefersReduced(mediaQuery.matches)
    
    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return prefersReduced
}