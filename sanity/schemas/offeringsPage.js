export default {
    name: 'offeringsPage',
    title: 'Offerings Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'intro', title: 'Intro Section' },
        { name: 'offerings', title: 'Offerings List' },
        { name: 'assessment', title: 'Assessment Section' },
        { name: 'cta', title: 'CTA Section' },
    ],
    fields: [
        // --- HERO SECTION ---
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

        // --- INTRO SECTION ---
        {
            name: 'introHeadline',
            title: 'Intro Headline',
            type: 'string',
            group: 'intro',
        },
        {
            name: 'introCopy',
            title: 'Intro Copy',
            type: 'array',
            of: [{type: 'block'}],
            group: 'intro',
        },

        // --- OFFERINGS LIST ---
        {
            name: 'offeringsCategories',
            title: 'Offering Categories',
            type: 'array',
            group: 'offerings',
            description: 'Bucket offerings by type (e.g., "Insurance", "Annuities").',
            of: [
                {
                    type: 'object',
                    fields: [
                        { 
                            name: 'categoryName', 
                            title: 'Category Name', 
                            type: 'string', 
                            description: 'e.g., "INSURANCE" or "ANNUITIES"' 
                        },
                        { 
                            name: 'products', 
                            title: 'Products List', 
                            type: 'array', 
                            of: [{ type: 'string' }],
                            description: 'The items listed in the left column (e.g., "Term Life Insurance").'
                        },
                        { 
                            name: 'needs', 
                            title: 'Needs List', 
                            type: 'array', 
                            of: [{ type: 'string' }],
                            description: 'The items listed under the "NEEDS" column on the right.'
                        },
                        {
                            name: 'disclaimer',
                            title: 'Disclaimer / Footer Text',
                            type: 'array',
                            of: [{type: 'block'}],
                            description: 'Optional small text displayed at the bottom of the section (e.g., the variable life policy disclaimer).'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'categoryName',
                        },
                        prepare({ title }) {
                            return { title: title || 'Untitled Category' };
                        }
                    },
                },
            ],
        },

        // --- CTA SECTION ---
        {
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
            description: 'The headline for the contact block at the bottom of the page.',
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
            return { title: 'Offerings Page' };
        },
    },
};
