import ScrollProgress from '../ScrollProgress';
import Nav from '../Nav';
import Footer from '../Footer';
import SpeakersHero from './SpeakersHero';
import SpeakerGrid from './SpeakerGrid';
import CTASection from '../shared/CTASection';

export default function IntervenantsBody() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main style={{ paddingTop: 60, background: '#0e0218', minHeight: '100vh', color: '#fff' }}>
        <SpeakersHero />
        <SpeakerGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
