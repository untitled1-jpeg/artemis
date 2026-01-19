import { client } from '@/sanity/lib/client';
import { heroQuery, missionQuery, teamQuery, advisorQuery } from '@/sanity/lib/queries';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import Offerings from '@/components/Offerings';
import Advisor from '@/components/Advisor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home() {
  const [heroData, missionData, teamData, advisorData, offeringsData] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(missionQuery),
    client.fetch(teamQuery),
    client.fetch(advisorQuery),
    client.fetch(offeringsQuery),
  ]);

  return (
    <main>
      <Nav />
      <Hero data={heroData} />
      <Mission data={missionData} />
      <Team data={teamData} />
      <Offerings data={offeringsData} />
      <Advisor data={advisorData} />
      <Contact />
      <Footer />
    </main>
  );
}
