export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'subheadline',
            title: 'Subheadline',
            type: 'text',
        },
        {
            name: 'lottieAnimation',
            title: 'Lottie Animation JSON URL',
            type: 'url',
            description: 'URL to the Lottie JSON file or local path reference.',
        },
    ],
};
