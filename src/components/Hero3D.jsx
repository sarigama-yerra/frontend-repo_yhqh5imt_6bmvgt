import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7])

  return (
    <div className="relative h-[80vh] sm:h-[90vh]">
      <motion.div style={{ scale, y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8f1mwbq9p1KjnxJq/scene.splinecode" />
      </motion.div>
      <div className="relative z-10 h-full flex items-end sm:items-center justify-center">
        <div className="text-center p-6 bg-white/60 backdrop-blur rounded-xl shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">Project Odyssey</h1>
          <p className="mt-3 text-gray-700 max-w-xl">
            A scroll-driven story about a kid navigating a complex project — costs, progress, and teamwork.
          </p>
        </div>
      </div>
    </div>
  )
}
