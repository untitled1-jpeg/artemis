import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import Offerings from '@/components/Offerings';
import Advisor from '@/components/Advisor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mission />
      <Team />
      <Offerings />
      <Advisor />
      <Contact />
      <Footer />
    </main>
  );
}
