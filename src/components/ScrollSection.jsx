import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollSection({ id, title, subtitle, children, bg = 'from-indigo-50 to-sky-50' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: true })

  return (
    <section id={id} className={`min-h-screen flex items-center justify-center px-6 sm:px-10 py-24 bg-gradient-to-br ${bg} overflow-hidden`}>
      <div ref={ref} className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-3"
        >
          {title && <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
