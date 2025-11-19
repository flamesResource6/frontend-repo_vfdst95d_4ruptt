export default function Newsletter() {
  return (
    <section id="subscribe" className="relative isolate overflow-hidden bg-slate-900 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Stay ahead with our daily brief</h2>
            <p className="mt-3 text-slate-300">Get the top stories and market-moving insights delivered to your inbox every morning.</p>
          </div>
          <form className="flex w-full max-w-lg gap-3">
            <input placeholder="Enter your email" type="email" className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-300/70 outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-md transition-shadow">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
