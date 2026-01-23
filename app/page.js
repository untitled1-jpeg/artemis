import { client } from '@/sanity/lib/client';
import { heroQuery, missionQuery, teamQuery, advisorQuery, offeringsQuery } from '@/sanity/lib/queries';
import Nav from '@/components/Nav';
import HomeHero from '@/components/HomeHero';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import Offerings from '@/components/Offerings';
import Advisor from '@/components/Advisor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

// Loading Placeholders
const SectionPlaceholder = ({ height = '400px' }) => (
  <div style={{ height, width: '100%', backgroundColor: 'var(--color-teal)', opacity: 0.1 }} />
);

async function HeroSection() {
  const data = await client.fetch(heroQuery);
  return <HomeHero data={data} />;
}

async function MissionSection() {
  const data = await client.fetch(missionQuery);
  return <Mission data={data} />;
}

async function TeamSection() {
  const data = await client.fetch(teamQuery);
  return <Team data={data} />;
}

async function OfferingsSection() {
  const data = await client.fetch(offeringsQuery);
  return <Offerings data={data} />;
}

async function AdvisorSection() {
  const data = await client.fetch(advisorQuery);
  return <Advisor data={data} />;
}

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />

      <Suspense fallback={<SectionPlaceholder />}>
        <MissionSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <TeamSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <OfferingsSection />
      </Suspense>

      <Suspense fallback={<SectionPlaceholder />}>
        <AdvisorSection />
      </Suspense>

      <Contact />
      <Footer />
    </main>
  );
}
