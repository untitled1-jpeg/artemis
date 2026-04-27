export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'mission', title: 'Mission Section' },
        { name: 'team', title: 'Team Section' },
        { name: 'offerings', title: 'Offerings Section' },
        { name: 'cta', title: 'CTA Section' },
    ],
    fields: [
        // --- HERO SECTION ---
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

        // --- MISSION SECTION ---
        {
            name: 'missionHeadline',
            title: 'Mission Headline',
            type: 'string',
            group: 'mission',
            initialValue: 'THE ARTEMIS MISSION',
        },
        {
            name: 'missionCopy',
            title: 'Mission Copy',
            type: 'text',
            group: 'mission',
            rows: 4,
        },
        {
            name: 'missionButtonText',
            title: 'Mission Button Text',
            type: 'string',
            group: 'mission',
            initialValue: 'LEARN MORE',
        },
        {
            name: 'missionButtonLink',
            title: 'Mission Button Link',
            type: 'string',
            group: 'mission',
            initialValue: '/mission',
        },
        {
            name: 'missionImage',
            title: 'Mission Graphic / Image',
            type: 'image',
            group: 'mission',
            options: { hotspot: true },
        },

        // --- TEAM SECTION ---
        {
            name: 'teamHeadline',
            title: 'Team Headline',
            type: 'string',
            group: 'team',
            initialValue: 'THE ARTEMIS TEAM',
        },
        {
            name: 'teamCopy',
            title: 'Team Copy',
            type: 'text',
            group: 'team',
            rows: 4,
        },
        {
            name: 'teamButtonText',
            title: 'Team Button Text',
            type: 'string',
            group: 'team',
            initialValue: 'MEET THE TEAM',
        },
        {
            name: 'teamButtonLink',
            title: 'Team Button Link',
            type: 'string',
            group: 'team',
            initialValue: '/team',
        },
        {
            name: 'teamImages',
            title: 'Team Images (Carousel)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            group: 'team',
            description: 'Images to cycle through in the team section carousel.',
        },

        // --- OFFERINGS SECTION ---
        {
            name: 'offeringsHeadline',
            title: 'Offerings Headline',
            type: 'string',
            group: 'offerings',
            initialValue: 'THE ARTEMIS OFFERINGS',
        },
        {
            name: 'offeringsCopy',
            title: 'Offerings Copy',
            type: 'text',
            group: 'offerings',
            rows: 4,
            description: 'Optional introductory text for the offerings section.',
        },
        {
            name: 'offeringsButtonText',
            title: 'Offerings Button Text',
            type: 'string',
            group: 'offerings',
        },
        {
            name: 'offeringsButtonLink',
            title: 'Offerings Button Link',
            type: 'string',
            group: 'offerings',
        },

        // --- CTA SECTION ---
        {
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
            description: 'e.g., "Life insurance is personal. So are we. Let\'s meet for coffee or a cocktail."',
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string',
            group: 'cta',
            initialValue: 'CONTACT US',
        },
        {
            name: 'ctaButtonLink',
            title: 'CTA Button Link',
            type: 'string',
            group: 'cta',
            initialValue: '/connect',
        },
        {
            name: 'ctaImage',
            title: 'CTA Background Image',
            type: 'image',
            group: 'cta',
            description: 'The background image for the CTA section (e.g., pouring coffee).',
            options: { hotspot: true },
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
