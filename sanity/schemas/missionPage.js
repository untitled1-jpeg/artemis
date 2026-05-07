export default {
    name: 'missionPage',
    title: 'Mission Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'editorial', title: 'Editorial Section' },
        { name: 'advisor', title: 'Advisor Section (Override)' },
        { name: 'cta', title: 'CTA Section' },
    ],
    fields: [
        // --- HERO SECTION ---
        {
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
            initialValue: 'THE ARTEMIS\nMISSION',
        },
        {
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            group: 'hero',
            options: { hotspot: true },
        },

        // --- EDITORIAL SECTION ---
        {
            name: 'editorialHeadline',
            title: 'Editorial Headline',
            type: 'string',
            group: 'editorial',
            description: 'e.g., "We approach every relationship with both creativity and sensitivity..."',
        },
        {
            name: 'editorialParagraphs',
            title: 'Editorial Paragraphs',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'editorial',
        },
        {
            name: 'button1Text',
            title: 'Button 1 Text',
            type: 'string',
            group: 'editorial',
            initialValue: 'OUR OFFERINGS',
        },
        {
            name: 'button1Link',
            title: 'Button 1 Link',
            type: 'string',
            group: 'editorial',
            initialValue: '/offerings',
        },
        {
            name: 'button2Text',
            title: 'Button 2 Text',
            type: 'string',
            group: 'editorial',
            initialValue: 'OUR TEAM',
        },
        {
            name: 'button2Link',
            title: 'Button 2 Link',
            type: 'string',
            group: 'editorial',
            initialValue: '/team',
        },

        // --- ADVISOR SECTION ---
        {
            name: 'advisorHeadline',
            title: 'Advisor Headline Override',
            type: 'string',
            group: 'advisor',
            description: 'Optional. Leave blank to use the default Advisor component text.',
        },
        {
            name: 'advisorCopy',
            title: 'Advisor Copy Override',
            type: 'text',
            rows: 4,
            group: 'advisor',
            description: 'Optional. Leave blank to use the default Advisor component text.',
        },

        // --- CTA SECTION ---
        {
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
            description: 'The headline for the contact block at the bottom of the page.',
            initialValue: 'Life insurance is too personal for a contact form. Let’s meet in person.',
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
            options: { hotspot: true },
        },
    ],
    preview: {
        prepare() {
            return { title: 'Mission Page' };
        },
    },
};
