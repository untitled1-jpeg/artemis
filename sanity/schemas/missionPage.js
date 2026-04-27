export default {
    name: 'missionPage',
    title: 'Mission Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'content', title: 'Mission Content' },
    ],
    fields: [
        {
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            group: 'hero',
            options: { hotspot: true },
        },
        {
            name: 'missionStatements',
            title: 'Mission Statements',
            type: 'array',
            group: 'content',
            description: 'The alternating text and image blocks on the mission page.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'heading', title: 'Heading', type: 'string', description: 'e.g., "Life Insurance Needs Have Become Very Complex"' },
                        { name: 'body', title: 'Body Copy', type: 'text', rows: 4 },
                        { name: 'image', title: 'Related Image', type: 'image', options: { hotspot: true } },
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            media: 'image',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return { title: 'Mission Page' };
        },
    },
};
