import Nav       from './components/Nav';
import Hero      from './components/Hero';
import ForWho    from './components/ForWho';
import Services  from './components/Services';
import Process   from './components/Process';
import WhyFulcro from './components/WhyFulcro';
import CTA       from './components/CTA';
import Footer    from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ForWho />
        <Services />
        <Process />
        <WhyFulcro />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
