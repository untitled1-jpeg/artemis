export default {
    name: 'connectPage',
    title: 'Connect Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'intro', title: 'Intro Section' },
    ],
    fields: [
        // --- HERO SECTION ---
        {
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
            initialValue: 'CONNECT\nWITH US',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            group: 'hero',
            options: { hotspot: true },
        },

        // --- INTRO SECTION ---
        {
            name: 'introHeadline',
            title: 'Intro Headline',
            type: 'string',
            group: 'intro',
            description: 'e.g., "We’re here to guide your next step."',
        },
        {
            name: 'introCopy',
            title: 'Intro Copy',
            type: 'array',
            of: [{type: 'block'}],
            group: 'intro',
            description: 'The paragraph explaining that you prefer a conversation.',
        },
    ],
    preview: {
        prepare() {
            return { title: 'Connect Page' };
        },
    },
};
