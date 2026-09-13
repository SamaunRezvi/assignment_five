export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-fit md:sticky md:top-24">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="mt-1 text-sm text-gray-400">No technologies selected yet.</p>
          <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-sm text-gray-400">
            {stack.length} Technology Selected
          </p>

          <div className="mt-4 flex flex-col gap-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border border-gray-100 rounded-xl p-3"
              >
                <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="text-gray-400 hover:text-gray-600 text-lg leading-none"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full border border-red-200 text-red-500 font-semibold py-2.5 rounded-lg hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
