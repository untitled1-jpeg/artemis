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
                            type: 'text',
                            rows: 3,
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
    ],
    preview: {
        prepare() {
            return { title: 'Offerings Page' };
        },
    },
};
