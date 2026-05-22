import { CaseStudies } from './components/CaseStudies';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowWeWork } from './components/HowWeWork';
import { PartnerTicker } from './components/PartnerTicker';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { useReveal } from './hooks/useReveal';

export function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerTicker />
        <HowWeWork />
        <Services />
        <CaseStudies />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
