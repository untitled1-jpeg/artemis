import { client } from '@/sanity/lib/client';
import { homePageQuery } from '@/sanity/lib/queries';
import Nav from '@/components/Nav';
import HomeHero from '@/components/HomeHero';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import Offerings from '@/components/Offerings';
import Advisor from '@/components/Advisor';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export const revalidate = 60;

export default async function Home() {
  const data = await client.fetch(homePageQuery);

  return (
    <main>
      <Nav />
      <HomeHero data={{ headline: data?.heroHeadline, subheadline: data?.heroSubheadline, heroBackgroundImage: data?.heroBackgroundImage }} />

      <Mission data={{ title: data?.missionHeadline, body: data?.missionCopy, ctaLabel: data?.missionButtonText, ctaLink: data?.missionButtonLink, image: data?.missionImage }} />

      <Team data={{ title: data?.teamHeadline, content: data?.teamCopy, ctaLabel: data?.teamButtonText, images: data?.teamImages }} />

      <Offerings data={{ title: data?.offeringsHeadline, body: data?.offeringsCopy, ctaLabel: data?.offeringsButtonText, ctaLink: data?.offeringsButtonLink }} />

      <Advisor data={{ title: data?.advisorHeadline, body: data?.advisorCopy }} />

      <Contact title={data?.ctaHeadline} image={data?.ctaImage} />
      <Footer />
    </main>
  );
}
