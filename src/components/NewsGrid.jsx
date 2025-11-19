import ArticleCard from './ArticleCard'

const demo = [
  {
    image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1600&auto=format&fit=crop',
    title: 'AI regulation heats up as global leaders meet to set new standards',
    excerpt: 'Policymakers are converging to discuss frameworks that balance innovation with responsible deployment amid rapid AI adoption.',
    tag: 'Tech',
    author: 'By Sarah Kim',
    time: '2h ago',
  },
  {
    image: 'https://images.unsplash.com/photo-1695390476549-7bc8aa9f73ce?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJrZXRzJTIwcmFsbHklMjBvbiUyMHVwYmVhdHxlbnwwfDB8fHwxNzYzNTE2NDA5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Markets rally on upbeat economic data, investors eye central bank signals',
    excerpt: 'Stocks climbed as fresh data pointed to resilient consumer demand and easing inflation pressures in key sectors.',
    tag: 'Markets',
    author: 'By James Lee',
    time: '1h ago',
  },
  {
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1600&auto=format&fit=crop',
    title: 'Breakthrough in renewable storage promises cheaper, longer-lasting power',
    excerpt: 'A new battery chemistry could accelerate grid-scale storage and cut costs across the clean energy transition.',
    tag: 'Science',
    author: 'By Priya N.',
    time: '45m ago',
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    title: 'Startup ecosystem expands as founders look beyond traditional hubs',
    excerpt: 'Secondary cities are seeing a surge in venture activity as remote work and new incentives reshape the map.',
    tag: 'Business',
    author: 'By Chen Wang',
    time: '3h ago',
  },
  {
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1600&auto=format&fit=crop',
    title: 'National team books semifinal spot after dramatic late winner',
    excerpt: 'In a tense quarterfinal, the underdogs delivered a stunning finish that sent fans into raptures.',
    tag: 'Sports',
    author: 'By Laura P.',
    time: '30m ago',
  },
  {
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1600&auto=format&fit=crop',
    title: 'Curators reimagine classic works for the digital age',
    excerpt: 'Museums are experimenting with immersive formats to attract new audiences and reinterpret timeless pieces.',
    tag: 'Culture',
    author: 'By Matteo R.',
    time: '4h ago',
  }
]

export default function NewsGrid() {
  return (
    <section id="latest" className="py-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Latest Headlines</h2>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demo.map((a, i) => (
            <ArticleCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
