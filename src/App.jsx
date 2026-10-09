function Navbar() {
  return (
    <nav className="flex min-h-[72px] items-center justify-between gap-6 bg-[#333] px-5 text-white sm:px-[8%]" aria-label="Main navigation">
      <a className="text-[1.35rem] font-bold tracking-tight text-white no-underline" href="#home">
        MyBrand
      </a>
      <div className="flex items-center gap-4 sm:gap-8">
        <a className="text-sm text-gray-200 no-underline transition-colors hover:text-white sm:text-base" href="#home">
          Home
        </a>
        <a className="text-sm text-gray-200 no-underline transition-colors hover:text-white sm:text-base" href="#about">
          About
        </a>
        <a className="text-sm text-gray-200 no-underline transition-colors hover:text-white sm:text-base" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <main id="home">
      <section
        className="grid min-h-[calc(100vh-72px)] place-items-center bg-[radial-gradient(ellipse_at_50%_38%,rgba(91,124,250,0.12),transparent_55%),#f7f9fc] px-6 py-20 text-center"
        aria-labelledby="hero-title"
      >
        <div className="w-full max-w-[760px]">
          <h1
            className="m-0 text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[1.08] tracking-[-0.065em] text-[#172033]"
            id="hero-title"
          >
            Welcome to Our Website
          </h1>
          <p className="mx-auto mb-8 mt-6 max-w-[600px] text-[clamp(1rem,2vw,1.15rem)] leading-[1.75] text-gray-500">
            Discover a simpler way to bring your ideas to life. We’re here to
            help you take the next step with clarity, confidence, and the right
            tools for the journey.
          </p>
          <a
            className="inline-flex min-h-[52px] items-center justify-center rounded-[9px] bg-indigo-600 px-[26px] text-base font-semibold text-white no-underline shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="#about"
          >
            Get Started
          </a>
        </div>
      </section>
      <section id="about" aria-label="About" />
      <section id="contact" aria-label="Contact" />
    </main>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Home />
    </div>
  )
}
