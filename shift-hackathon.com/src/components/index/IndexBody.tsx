import Nav from '../Nav';
import Footer from '../Footer';
import IndexHero from './IndexHero';
import IntroSection from './IntroSection';
import SpeakersPreview from './SpeakersPreview';
import AuProgramme from './AuProgramme';
import Testimonials from './Testimonials';
import TestimonialsList from './TestimonialsList';
import Partners from './Partners';
import Pricing from './Pricing';
import Banner from './Banner';
import Lieu from './Lieu';
import Faq from './Faq';
import OrgaTeam from './OrgaTeam';

export default function IndexBody() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 60, background: '#000', minHeight: '100vh', color: '#fff' }}>
        <IndexHero />
        <IntroSection />
        <SpeakersPreview />
        <AuProgramme />
        <Testimonials />
        <TestimonialsList />
        <Partners />
        <Pricing />
        <Banner />
        <Lieu />
        <Faq />
        <OrgaTeam />
      </main>
      <Footer />
    </>
  );
}
