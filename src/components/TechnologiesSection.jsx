import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechCard from './TechCard'
import YourStack from './YourStack'

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    // technologies live in a local JSON file, so this "fetch" resolves almost
    // instantly - the loading state below is still real, it just won't be
    // visible for long on screen
    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id)

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  const handleRemove = (id) => {
    const removed = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    if (removed) toast.info(`${removed.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        Explore the <span className="text-pink-600">Technologies</span>
      </h2>
      <p className="mt-2 text-gray-500">Pick one technology per category to build your ideal stack.</p>

      <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
        <div className="md:col-span-2 lg:col-span-3">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <span className="loading loading-spinner loading-lg text-pink-500 mb-3"></span>
              <p className="text-sm">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          )}
        </div>

        <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      </div>
    </section>
  )
}
