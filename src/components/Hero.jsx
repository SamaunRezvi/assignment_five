import bannerImg from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="min-w-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 text-gray-500 text-base sm:text-lg w-full max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="bg-brand-gradient text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Development stack illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
