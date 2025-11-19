export default function ArticleCard({ image, title, excerpt, tag, author, time }) {
  return (
    <article className="group grid grid-rows-[auto_1fr_auto] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1">{tag}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-2">{title}</h3>
        <p className="mt-2 text-slate-600 text-sm line-clamp-3">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between px-5 pb-5 text-xs text-slate-500">
        <span>{author}</span>
        <span>{time}</span>
      </div>
    </article>
  )
}
