import { useState } from 'react'

const categories = [
  'Top', 'World', 'Business', 'Tech', 'Markets', 'Sports', 'Science', 'Culture'
]

export default function CategoryTabs({ onSelect }) {
  const [active, setActive] = useState('Top')

  return (
    <div className="w-full overflow-x-auto border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-1 h-12 items-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActive(cat); onSelect?.(cat) }}
              className={`${active === cat ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-700'} px-4 py-2 rounded-full text-sm font-medium transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
