import { useCountUp } from '../hooks/useCountUp';
import { SectionShell } from './ui/SectionShell';
import { StitchedCta } from './ui/StitchedCta';

export function Hero() {
  const projects = useCountUp(400);
  const clients = useCountUp(150);

  return (
    <SectionShell id="top" className="w-[min(1440px,calc(100%_-_4.75rem))] py-5 max-md:w-[min(calc(100%_-_1.75rem),1340px)]" data-reveal>
      <div className="relative overflow-hidden border border-white/15 bg-[#0d0c15] p-7 min-[901px]:min-h-[clamp(720px,78vh,860px)] min-[901px]:p-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] hidden w-[52.25%] border-r border-white/5 bg-gradient-to-r from-[#1c1b28]/70 to-[#171622]/60 shadow-[inset_-55px_0_115px_rgba(255,90,31,0.045)] backdrop-blur-md min-[901px]:block" />
        <div className="pointer-events-none absolute inset-y-0 left-[52.25%] z-[4] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent min-[901px]:block" />

        <div className="relative z-[6] max-w-[460px] min-[901px]:absolute min-[901px]:left-[clamp(46px,5vw,76px)] min-[901px]:top-[clamp(88px,13vh,122px)]">
          <h2 className="text-5xl font-bold uppercase leading-tight text-white sm:text-6xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
            From branding and design to digital marketing and strategy, we offer a full suite of services designed to
            help our clients stand out and achieve their goals.
          </p>
        </div>

        <div className="pointer-events-none relative z-[2] min-h-75 min-[901px]:absolute min-[901px]:inset-0 min-[901px]:min-h-0" aria-hidden="true">
          <img
            className="absolute left-1/2 top-1/2 w-[min(520px,112%)] -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-screen min-[901px]:left-[45.25%] min-[901px]:w-[min(760px,42vw)]"
            src="/assets/hero-orb.png"
            alt=""
          />
        </div>

        <div className="relative z-[6] text-2xl font-semibold leading-tight text-white min-[901px]:absolute min-[901px]:bottom-[clamp(132px,18.5vh,176px)] min-[901px]:left-[clamp(46px,5vw,76px)] min-[901px]:max-w-sm min-[901px]:text-4xl">
          Solutions that drive real results and make a difference
        </div>

        <div className="relative z-[7] -mt-24 ml-[48%] min-[901px]:absolute min-[901px]:bottom-[clamp(132px,18vh,162px)] min-[901px]:left-[clamp(430px,39vw,565px)] min-[901px]:m-0">
          <StitchedCta href="#contact-us" aria-label="Get in touch">
            <span className="block max-w-14 text-sm leading-none sm:text-base">Let's talk</span>
          </StitchedCta>
        </div>

        <div className="relative z-[6] pt-4 min-[901px]:absolute min-[901px]:right-[clamp(54px,6.6vw,86px)] min-[901px]:top-[clamp(96px,15vh,132px)] min-[901px]:w-[min(360px,27vw)] min-[901px]:pt-0">
          <h2 className="text-2xl font-semibold leading-tight text-white">Innovative Solutions, Impactful Results</h2>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            Our mission is to empower individuals and organizations to unleash their creative potential and make a
            positive impact on the world.
          </p>
        </div>

        <img
          className="relative z-[6] ml-auto mt-3 w-[6.5rem] rounded-full mix-blend-screen min-[901px]:absolute min-[901px]:right-[clamp(72px,7.5vw,108px)] min-[901px]:top-[44.5%] min-[901px]:mt-0 min-[901px]:w-[clamp(96px,8.6vw,132px)]"
          src="/assets/case-orb.png"
          alt="Small iridescent abstract 3D sphere"
        />

        <div className="relative z-[6] pt-2 min-[901px]:absolute min-[901px]:bottom-[clamp(76px,11vh,110px)] min-[901px]:right-[clamp(54px,6.6vw,86px)] min-[901px]:w-[min(390px,29vw)]">
          <p className="text-base leading-7 text-zinc-400">Solutions that drive success and propel your business forward</p>
          <div className="mt-6 flex flex-col gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:bg-transparent sm:p-0 min-[901px]:mt-8 min-[901px]:gap-12 min-[901px]:border-0" aria-label="Agency metrics">
            <div>
              <strong className="block text-4xl font-medium leading-none text-white md:text-5xl">{projects}+</strong>
              <span className="mt-2 block max-w-30 text-xs leading-5 text-zinc-400">Successful projects</span>
            </div>
            <div>
              <strong className="block text-4xl font-medium leading-none text-white md:text-5xl">{clients}+</strong>
              <span className="mt-2 block max-w-30 text-xs leading-5 text-zinc-400">Startups raised</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
