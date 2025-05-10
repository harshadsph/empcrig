'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollNavigator() {
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.body.offsetHeight

      setAtTop(scrollY < 100)
      setAtBottom(windowHeight + scrollY >= docHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (direction) => {
    window.scrollBy({
      top: direction === 'down' ? window.innerHeight : -window.innerHeight,
      behavior: 'smooth'
    })
  }

  if (atTop && atBottom) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-2">
      <AnimatePresence>
        {!atBottom && (
          <motion.button
            key="down"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollTo('down')}
            className="bg-hexblue text-white p-2 rounded-full shadow-lg hover:bg-hexgrey transition"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </motion.button>
        )}
        {!atTop && (
          <motion.button
            key="up"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollTo('up')}
            className="bg-hexblue text-white p-2 rounded-full shadow-lg hover:bg-hexgrey transition"
            aria-label="Scroll up"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
