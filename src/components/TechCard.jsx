export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div
      className={`tech-card bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl flex flex-col ${
        isAdded ? 'border-pink-400' : 'border-gray-100'
      }`}
    >
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="mt-2 text-sm text-gray-500 flex-1">{tech.description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
        <span className="bg-gray-100 px-2.5 py-1 rounded-md font-medium">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700 font-medium">
          <span className="text-yellow-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
          isAdded
            ? 'bg-pink-50 text-pink-600 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
