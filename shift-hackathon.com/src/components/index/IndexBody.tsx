import ScrollProgress from '../ScrollProgress';
import Nav from '../Nav';
import Footer from '../Footer';
import IndexHero from './IndexHero';
import Experience from './Experience';
import SpeakersPreview from './SpeakersPreview';
import Programme from './Programme';
import Testimonials from './Testimonials';
import Partners from './Partners';
import Pricing from './Pricing';
import OrgaTeam from './OrgaTeam';

export default function IndexBody() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main style={{ paddingTop: 60, background: '#000', minHeight: '100vh', color: '#fff' }}>
        <IndexHero />
        <Experience />
        <SpeakersPreview />
        <Programme />
        <Testimonials />
        <Partners />
        <Pricing />
        <OrgaTeam />
      </main>
      <Footer />
    </>
  );
}
