export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'welcome', title: 'Welcome Section' },
    ],
    fields: [
        {
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
            description: 'The large text displayed in the center of the hero video/image.',
        },
        {
            name: 'heroSubheadline',
            title: 'Hero Subheadline',
            type: 'string',
            group: 'hero',
            description: 'The smaller text displayed below the main headline.',
        },
        {
            name: 'heroBackgroundImage',
            title: 'Hero Fallback Background Image',
            type: 'image',
            group: 'hero',
            description: 'Image shown before the video loads or on devices where video fails to play.',
            options: { hotspot: true },
        },
        {
            name: 'welcomeTitle',
            title: 'Welcome Section Title',
            type: 'string',
            group: 'welcome',
            description: 'e.g., "Welcome to Artemis"',
        },
        {
            name: 'welcomeBody',
            title: 'Welcome Body Copy',
            type: 'text',
            group: 'welcome',
            description: 'The introductory paragraph text on the home page.',
            rows: 5,
        },
        {
            name: 'welcomeCtaText',
            title: 'Welcome CTA Button Text',
            type: 'string',
            group: 'welcome',
            description: 'e.g., "LEARN MORE"',
        },
        {
            name: 'welcomeCtaLink',
            title: 'Welcome CTA Button Link',
            type: 'string',
            group: 'welcome',
            description: 'e.g., "/mission" or "/offerings"',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Home Page',
            };
        },
    },
};
