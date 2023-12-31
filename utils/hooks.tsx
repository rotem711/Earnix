import { useEffect, useState } from 'react'

const { theme } = require('../tailwind.config')

export default function useIsMobile(breakPoint?: string) {
  const [isMobile, setIsMobile] = useState(true)
  const bpWidth = theme.screens[breakPoint || 'md'].replace('px', '')
  const onResize = () => {
    setIsMobile(window.innerWidth < bpWidth)
  }
  const events = ['resize', 'orientationchange']

  useEffect(() => {
    // trigger callback once after initial rendering
    onResize()
    // add event listeners for all events from the array above
    events.forEach((e) => {
      window.addEventListener(e, () => {
        onResize()
      })
    })
    // remove event listeners for all events from the array above
    return () => {
      events.forEach((e) => {
        window.removeEventListener(e, () => {})
      })
    }
  }, [])
  return isMobile
}
