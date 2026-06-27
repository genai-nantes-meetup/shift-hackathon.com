import Footer from '../Footer';
import ConceptHero from './ConceptHero';
import Features from './Features';
import ProjectExamples from './ProjectExamples';
import CTASection from '../shared/CTASection';
import Faq from '../shared/Faq';

export default function ConceptBody() {
  return (
    <>
      <main style={{ paddingTop: 60, background: '#000', minHeight: '100vh', color: '#fff' }}>
        <ConceptHero />
        <Features />
        <ProjectExamples />
        <CTASection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
