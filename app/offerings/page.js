import { offeringsPageQuery, globalSettingsQuery } from '@/sanity/lib/queries';
import OfferingsClient from './OfferingsClient';

export const revalidate = 60;

export default async function OfferingsPage() {
    const [data, settings] = await Promise.all([
        client.fetch(offeringsPageQuery),
        client.fetch(globalSettingsQuery)
    ]);
    return <OfferingsClient data={data} settings={settings} />;
}
