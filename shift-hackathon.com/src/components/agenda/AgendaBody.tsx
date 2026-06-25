import Nav from '../Nav';
import Footer from '../Footer';
import AgendaHero from './AgendaHero';
import Schedule from './Schedule';
import CTASection from '../shared/CTASection';

export default function AgendaBody() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 60, background: '#000', minHeight: '100vh', color: '#fff' }}>
        <AgendaHero />
        <Schedule />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
