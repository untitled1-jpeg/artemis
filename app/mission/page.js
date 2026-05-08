import { missionPageQuery, globalSettingsQuery } from '@/sanity/lib/queries';
import MissionClient from './MissionClient';

export const revalidate = 60;

export default async function MissionPage() {
    const [data, settings] = await Promise.all([
        client.fetch(missionPageQuery),
        client.fetch(globalSettingsQuery)
    ]);
    return <MissionClient data={data} settings={settings} />;
}
