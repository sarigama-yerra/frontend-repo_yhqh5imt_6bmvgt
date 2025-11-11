import { motion } from 'framer-motion'

export default function MetricCard({ label, value, sub, color = 'indigo' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl p-5 bg-white shadow-sm border border-${color}-100`}
    >
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-3xl font-bold text-gray-900">{value}</div>
      {sub && <div className="mt-2 text-sm text-gray-600">{sub}</div>}
    </motion.div>
  )
}
