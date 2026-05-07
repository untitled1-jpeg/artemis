import { client } from '@/sanity/lib/client';
import { missionPageQuery } from '@/sanity/lib/queries';
import MissionClient from './MissionClient';

export const revalidate = 60;

export default async function MissionPage() {
    const data = await client.fetch(missionPageQuery);
    return <MissionClient data={data} />;
}
