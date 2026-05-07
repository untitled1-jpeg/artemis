import { client } from '@/sanity/lib/client';
import { teamPageQuery } from '@/sanity/lib/queries';
import TeamClient from './TeamClient';

export const revalidate = 60;

export default async function TeamPage() {
    const data = await client.fetch(teamPageQuery);
    return <TeamClient data={data} />;
}
