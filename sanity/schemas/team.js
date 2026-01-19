export default {
    name: 'team',
    title: 'Team Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content Text',
            type: 'text',
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ctaLabel',
            title: 'CTA Label',
            type: 'string',
        },
    ],
};
