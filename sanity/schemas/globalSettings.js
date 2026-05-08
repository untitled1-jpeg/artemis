export default {
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    groups: [
        { name: 'company', title: 'Company Details' },
        { name: 'social', title: 'Social Media' },
        { name: 'footer', title: 'Footer Settings' },
        { name: 'contact', title: 'Contact Form Defaults' },
    ],
    fields: [
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            group: 'company',
            description: 'The main contact phone number displayed across the site.',
        },
        {
            name: 'address',
            title: 'Physical Address',
            type: 'text',
            group: 'company',
            description: 'The physical address displayed on the Connect page and Footer.',
            rows: 3,
        },
        {
            name: 'email',
            title: 'General Email',
            type: 'string',
            group: 'company',
            description: 'The general inquiries email address.',
        },
        {
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
            group: 'social',
            description: 'Link to the Artemis LinkedIn company page.',
        },
        {
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            group: 'footer',
            description: 'e.g., "© 2024 Artemis. All rights reserved."',
        },
        {
            name: 'legalDisclaimer',
            title: 'Legal Disclaimer',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'footer',
            description: 'The small legal text at the very bottom of the footer.',
        },
        {
            name: 'contactSuccessMessage',
            title: 'Contact Form Success Message',
            type: 'string',
            group: 'contact',
            description: 'The message displayed after a user successfully submits the contact form.',
            initialValue: 'Thank you for your message. We will be in touch shortly.',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Global Settings',
            };
        },
    },
};
