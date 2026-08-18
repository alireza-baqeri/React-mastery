import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome, FaRocket } from "react-icons/fa";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="not-found-page relative min-h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-8vw] top-[-10vw] h-[30vw] w-[30vw] min-h-[180px] min-w-[180px] rounded-full bg-violet-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-10vw] right-[-8vw] h-[30vw] w-[30vw] min-h-[180px] min-w-[180px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Stars */}
      <div className="stars stars-1" />
      <div className="stars stars-2" />
      <div className="stars stars-3" />

      {/* Decorative planets */}
      <div className="planet planet-purple" />
      <div className="planet planet-blue" />

      {/* Orbiting objects */}
      <div className="orbit orbit-1">
        <div className="orbit-dot" />
      </div>

      <div className="orbit orbit-2">
        <div className="orbit-dot orbit-dot-orange" />
      </div>

      {/* Floating rocket */}
      <div className="rocket-animation pointer-events-none absolute right-[8%] top-[13%] hidden md:block">
        <div className="relative">
          <FaRocket className="rotate-[-35deg] text-5xl text-cyan-300 drop-shadow-[0_0_18px_rgba(103,232,249,0.9)]" />

          <span className="absolute -bottom-5 left-1/2 h-8 w-3 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-300 via-orange-400 to-transparent blur-[2px]" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          {/* Status badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-slate-300 backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            SIGNAL LOST
          </div>

          {/* 404 */}
          <div className="relative mb-8 w-fit">
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl">
              <span className="block text-[clamp(7rem,22vw,17rem)] font-black leading-none text-cyan-500/20">
                404
              </span>
            </div>

            {/* Main number */}
            <h1 className="relative bg-gradient-to-b from-white via-cyan-200 to-violet-400 bg-clip-text text-[clamp(7rem,22vw,17rem)] font-black leading-[0.8] tracking-[-0.08em] text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              404
            </h1>

            {/* Decorative orbit */}
            <div className="absolute left-1/2 top-1/2 h-[115%] w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-[50%] border border-cyan-400/15" />
          </div>

          {/* Text */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Lost in Space?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
            The page you are looking for has drifted somewhere into the unknown.
            It may have been moved, deleted, or never existed.
          </p>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              to="/"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] sm:w-auto"
            >
              <FaHome className="transition-transform duration-300 group-hover:scale-110" />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
            >
              <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Go Back
            </button>
          </div>

          {/* Bottom message */}
          <div className="mt-12 flex items-center gap-3 text-sm text-slate-500 sm:mt-14">
            <FaRocket className="text-cyan-400" />
            <span>Even developers get lost sometimes.</span>
          </div>
        </div>
      </div>

      {/* Bottom atmospheric glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-cyan-950/20 to-transparent" />
    </main>
  );
}

export default NotFoundPage;
