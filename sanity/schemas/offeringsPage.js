export default {
    name: 'offeringsPage',
    title: 'Offerings Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'offerings', title: 'Offerings List' },
    ],
    fields: [
        {
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
            description: 'e.g., "THE ARTEMIS\\nOFFERINGS"',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            group: 'hero',
            options: { hotspot: true },
        },
        {
            name: 'offeringsList',
            title: 'Offerings',
            type: 'array',
            group: 'offerings',
            description: 'Add, remove, and edit the services offered by Artemis.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Offering Title', type: 'string', description: 'e.g., "Policy Review"' },
                        { name: 'description', title: 'Description', type: 'text', rows: 4 },
                        { name: 'icon', title: 'Icon (Optional)', type: 'image', description: 'Upload an SVG or PNG icon.' },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                            media: 'icon',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return { title: 'Offerings Page' };
        },
    },
};
