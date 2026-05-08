import { teamPageQuery, globalSettingsQuery } from '@/sanity/lib/queries';
import TeamClient from './TeamClient';

export const revalidate = 60;

export default async function TeamPage() {
    const [data, settings] = await Promise.all([
        client.fetch(teamPageQuery),
        client.fetch(globalSettingsQuery)
    ]);
    return <TeamClient data={data} settings={settings} />;
}
