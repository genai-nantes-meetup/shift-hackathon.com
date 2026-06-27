import Footer from '../Footer';
import SpeakersHero from './SpeakersHero';
import SpeakerGrid from './SpeakerGrid';
import CTASection from '../shared/CTASection';

export default function IntervenantsBody() {
  return (
    <>
      <main style={{ paddingTop: 60, background: '#000', minHeight: '100vh', color: '#fff' }}>
        <SpeakersHero />
        <SpeakerGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
