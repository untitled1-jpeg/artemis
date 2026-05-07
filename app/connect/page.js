import { client } from '@/sanity/lib/client';
import { connectPageQuery, globalSettingsQuery } from '@/sanity/lib/queries';
import ConnectClient from './ConnectClient';

export const revalidate = 60;

export default async function ConnectPage() {
    const data = await client.fetch(connectPageQuery);
    const settings = await client.fetch(globalSettingsQuery);
    
    return <ConnectClient data={data} settings={settings} />;
}
