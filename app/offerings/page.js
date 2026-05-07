import { client } from '@/sanity/lib/client';
import { offeringsPageQuery } from '@/sanity/lib/queries';
import OfferingsClient from './OfferingsClient';

export const revalidate = 60;

export default async function OfferingsPage() {
    const data = await client.fetch(offeringsPageQuery);
    return <OfferingsClient data={data} />;
}
