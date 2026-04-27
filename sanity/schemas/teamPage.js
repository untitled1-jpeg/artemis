export default {
    name: 'teamPage',
    title: 'Team Page',
    type: 'document',
    groups: [
        { name: 'hero', title: 'Hero Section' },
        { name: 'intro', title: 'Intro Section' },
        { name: 'team', title: 'Team List Section' },
    ],
    fields: [
        // --- HERO SECTION ---
        {
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
            description: 'e.g., "THE ARTEMIS\\nTEAM"',
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
            description: 'e.g., "We didn’t want to wait for the industry to evolve, so we built something better."',
        },
        {
            name: 'introParagraphs',
            title: 'Intro Paragraphs',
            type: 'array',
            of: [{ type: 'text', rows: 4 }],
            group: 'intro',
            description: 'The introductory paragraphs about why Artemis was founded.',
        },

        // --- TEAM LIST SECTION ---
        {
            name: 'teamListHeadline',
            title: 'Team List Headline',
            type: 'string',
            group: 'team',
            initialValue: 'ARTEMIS TEAM',
            description: 'The title displayed above the list of team members.',
        },
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            group: 'team',
            description: 'Add, remove, and reorder team members here.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'title', title: 'Job Title', type: 'string', description: 'e.g., "Founder & CEO"' },
                        { name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } },
                        { name: 'shortSummary', title: 'Short Summary', type: 'text', rows: 3, description: 'Displays on the main team list. If left blank, it will auto-truncate the Full Bio.' },
                        { name: 'fullBio', title: 'Full Bio', type: 'text', rows: 6, description: 'Displays in the modal when "Read More" is clicked.' },
                        { name: 'email', title: 'Email Address', type: 'string' },
                        { name: 'linkedInUrl', title: 'LinkedIn URL', type: 'url' },
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'title',
                            media: 'image',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return { title: 'Team Page' };
        },
    },
};
