export default {
    name: 'connectPage',
    title: 'Connect Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'form', title: 'Form Configuration' },
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
            name: 'pageDescription',
            title: 'Page Description',
            type: 'text',
            group: 'hero',
            description: 'The short paragraph above the contact form.',
            rows: 3,
        },
        {
            name: 'formTitle',
            title: 'Form Title',
            type: 'string',
            group: 'form',
            description: 'e.g., "Send us a message"',
        },
        {
            name: 'submitButtonText',
            title: 'Submit Button Text',
            type: 'string',
            group: 'form',
            initialValue: 'SEND MESSAGE',
        },
    ],
    preview: {
        prepare() {
            return { title: 'Connect Page' };
        },
    },
};
