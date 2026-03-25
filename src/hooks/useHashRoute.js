import { useEffect, useState } from 'react'

function getRoute() {
  const h = window.location.hash.replace(/^#/, '')
  if (h === 'careers') return 'careers'
  return 'home'
}

export function useHashRoute() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
