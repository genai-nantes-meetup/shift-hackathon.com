import ScrollProgress from '../ScrollProgress';
import Nav from '../Nav';
import Footer from '../Footer';
import ConceptHero from './ConceptHero';
import Features from './Features';
import ProjectExamples from './ProjectExamples';
import CTASection from '../shared/CTASection';
import FAQ from './FAQ';

export default function ConceptBody() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main style={{ paddingTop: 60, background: '#0e0218', minHeight: '100vh', color: '#fff' }}>
        <ConceptHero />
        <Features />
        <ProjectExamples />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
