'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function TransitionTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3, ease: [0.39, 0.24, 0.3, 1] }}
      className="flex flex-1 overflow-y-auto border border-border bg-[rgba(10,10,32,0.6)] backdrop-blur-xl rounded-2xl"
    >
      {children}
    </motion.div>
  )
}
