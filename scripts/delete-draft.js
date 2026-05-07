const { createClient } = require('next-sanity');
const path = require('path');
const fs = require('fs');

const envPath = path.resolve(__dirname, '../.env.local');
const envFile = fs.readFileSync(envPath, 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-01-01',
    token: env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
});

async function run() {
    await client.delete('drafts.offeringsPage');
    await client.delete('drafts.homePage');
    await client.delete('drafts.missionPage');
    await client.delete('drafts.teamPage');
    await client.delete('drafts.connectPage');
    await client.delete('drafts.globalSettings');
    console.log('Drafts deleted');
}
run();
