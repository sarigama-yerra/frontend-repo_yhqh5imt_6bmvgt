import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Hero3D from './components/Hero3D'
import ScrollSection from './components/ScrollSection'
import MetricCard from './components/MetricCard'

function App() {
  const evm = useMemo(() => ({
    pv: 1_000_000, // Planned Value
    ev: 920_000,   // Earned Value
    ac: 970_000,   // Actual Cost
  }), [])

  const cpi = (evm.ev / evm.ac).toFixed(2)
  const spi = (evm.ev / evm.pv).toFixed(2)

  const resources = [
    { role: 'Engineering', count: 14 },
    { role: 'Design', count: 4 },
    { role: 'QA', count: 6 },
    { role: 'PM', count: 2 },
  ]

  const raci = [
    { task: 'Cost Baseline', R: 'Finance', A: 'CFO', C: 'PMO', I: 'Board' },
    { task: 'Feature Delivery', R: 'Engineering', A: 'CTO', C: 'Design, QA', I: 'PMO' },
    { task: 'Risk Review', R: 'PM', A: 'CTO', C: 'Leads', I: 'Board' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900">
      {/* 3D Hero */}
      <Hero3D />

      {/* Story Intro */}
      <ScrollSection
        id="intro"
        title="Meet Ayan"
        subtitle="A curious kid who loves building things. This story mirrors our project's journey — simple beginnings, growing complexity, and smart choices."
        bg="from-rose-50 to-amber-50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <p className="text-gray-700 leading-relaxed">
            Ayan starts with big ideas and a small budget. He plans carefully — just like we did with our cost baseline.
          </p>
        </motion.div>
      </ScrollSection>

      {/* Cost Estimate */}
      <ScrollSection
        id="cost"
        title="Cost Estimate"
        subtitle="Current spend VS plan with quick signals for efficiency and schedule health."
        bg="from-indigo-50 to-blue-50"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard label="Planned Value (PV)" value={`$${evm.pv.toLocaleString()}`} />
          <MetricCard label="Earned Value (EV)" value={`$${evm.ev.toLocaleString()}`} />
          <MetricCard label="Actual Cost (AC)" value={`$${evm.ac.toLocaleString()}`} />
          <MetricCard label="Estimate At Completion (EAC)" value={`$${(evm.ac/ (evm.ev/evm.pv)).toFixed(0).toLocaleString()}`} sub="Based on current CPI" />
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <MetricCard label="CPI" value={cpi} sub={cpi >= 1 ? 'On/Under budget' : 'Over budget'} />
          <MetricCard label="SPI" value={spi} sub={spi >= 1 ? 'On/Ahead of schedule' : 'Behind schedule'} />
        </div>
      </ScrollSection>

      {/* EVM Narrative */}
      <ScrollSection
        id="evm"
        title="EVM Snapshot"
        subtitle="Ayan learns to track progress using EVM — turning guesswork into clarity."
        bg="from-emerald-50 to-teal-50"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Budget efficiency (CPI): {cpi}</li>
            <li>Schedule efficiency (SPI): {spi}</li>
            <li>Action: Focus on scope with highest EV gain and tighten spending control.</li>
          </ul>
        </motion.div>
      </ScrollSection>

      {/* Resource Histogram */}
      <ScrollSection
        id="resources"
        title="Resource Histogram"
        subtitle="Team capacity across functions — keeping Ayan's build crew balanced."
        bg="from-fuchsia-50 to-pink-50"
      >
        <div className="grid grid-cols-4 gap-3 items-end">
          {resources.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: r.count * 12 + 40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, delay: i * 0.05 }}
              className="bg-white rounded-t-lg shadow relative"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600">{r.count}</div>
              <div className="p-3 text-center text-sm font-semibold text-gray-800">{r.role}</div>
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* RACI Matrix */}
      <ScrollSection
        id="raci"
        title="RACI Overview"
        subtitle="Who does what at each step — so Ayan always knows who to ask."
        bg="from-cyan-50 to-lime-50"
      >
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3 text-sm font-semibold text-gray-600">Task</th>
                <th className="p-3 text-sm font-semibold text-gray-600">R</th>
                <th className="p-3 text-sm font-semibold text-gray-600">A</th>
                <th className="p-3 text-sm font-semibold text-gray-600">C</th>
                <th className="p-3 text-sm font-semibold text-gray-600">I</th>
              </tr>
            </thead>
            <tbody>
              {raci.map((row) => (
                <tr key={row.task} className="border-t">
                  <td className="p-3 text-sm text-gray-800">{row.task}</td>
                  <td className="p-3 text-sm text-gray-800">{row.R}</td>
                  <td className="p-3 text-sm text-gray-800">{row.A}</td>
                  <td className="p-3 text-sm text-gray-800">{row.C}</td>
                  <td className="p-3 text-sm text-gray-800">{row.I}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollSection>

      {/* Outro */}
      <ScrollSection
        id="outro"
        title="What this means"
        subtitle="Ayan made steady progress with mindful spending. With a few course corrections, we finish strong."
        bg="from-slate-50 to-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Budget: Slight pressure; tighten procurement and overtime.</li>
            <li>Schedule: Minor delays; prioritize critical path stories.</li>
            <li>Resources: Add 1 QA and rotate design bandwidth in Sprint 12.</li>
          </ul>
        </motion.div>
      </ScrollSection>

      <footer className="py-10 text-center text-sm text-gray-500">Scroll to navigate the story. Press R to refresh if needed.</footer>
    </div>
  )
}

export default App
