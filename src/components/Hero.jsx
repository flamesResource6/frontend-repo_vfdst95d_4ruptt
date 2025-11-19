import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs uppercase tracking-widest text-slate-200 mb-4">
            Trusted Reporting • Real-Time Updates
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            The news that moves markets and minds
          </h1>
          <p className="mt-4 text-lg text-slate-200/90 max-w-2xl">
            A modern newsroom experience bringing you headlines, deep analysis and live coverage across the topics you care about.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#latest" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:shadow md:transition-all">
              Read latest stories
            </a>
            <a href="#subscribe" className="inline-flex items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-700/80 transition-colors">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
