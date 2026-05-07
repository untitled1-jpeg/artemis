const { createClient } = require('next-sanity');
const path = require('path');
const fs = require('fs');

const envPath = path.resolve(__dirname, '../.env.local');
const envFile = fs.readFileSync(envPath, 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-01-01',
    token: env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
});

async function uploadImage(filePath) {
    const fullPath = path.resolve(__dirname, '../public', filePath);
    if (!fs.existsSync(fullPath)) {
        console.warn(`Image not found: ${fullPath}`);
        return undefined;
    }
    const imageAsset = await client.assets.upload('image', fs.createReadStream(fullPath), {
        filename: path.basename(fullPath)
    });
    return {
        _key: Math.random().toString(36).substring(2, 10),
        _type: 'image',
        asset: {
            _type: 'reference',
            _ref: imageAsset._id
        }
    };
}

function toPortableText(textOrArray) {
    if (!textOrArray) return undefined;
    const array = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
    return array.map((text, i) => ({
        _type: 'block',
        _key: `block-${i}-${Math.random().toString(36).substring(7)}`,
        style: 'normal',
        markDefs: [],
        children: [{
            _type: 'span',
            _key: `span-${i}-${Math.random().toString(36).substring(7)}`,
            text: text,
            marks: [],
        }]
    }));
}

async function seed() {
    console.log('Starting Sanity seeding...');

    try {
        // --- 1. Global Settings ---
        const settings = {
            _id: 'globalSettings',
            _type: 'globalSettings',
            phoneNumber: '972.908.9027',
            address: '2750 Fairmount\nDallas, TX 75201',
            email: 'contact@artemisdallas.com',
            copyrightText: '© 2026 by Death and Tax Advisors, LLC, dba Artemis',
            legalDisclaimer: 'Securities and investment advisory services offered through Integrity Alliance, LLC, Member SIPC. Integrity Wealth is a marketing name for Integrity Alliance, LLC. Artemis is not affiliated with Integrity Wealth.\n\nDeath and Tax Advisors, LLC, dba Artemis, and the above firms are independent and nonaffiliated. Tax and legal advice are not offered through Integrity Wealth.\n\nArtemis is presently licensed to sell traditional life insurance in AZ, CA, CO, DE, FL, IL, LA, MA, MI, MT, NC, NJ, OK, TN, TX, VA, and WY. Variable life and annuity products, as well as other securities products, may be sold in AZ, CA, CO, DE, FL, IL, LA, MA, MI, MT, NC, NJ, OK, TN, TX, VA, and WY.\n\nThis site is published for residents of the United States only. Representatives may only conduct business with residents of the states and jurisdictions in which they are properly registered. Therefore, a response to a request for information may be delayed until appropriate registration is obtained or exemption from registration is determined. Not all services referenced on this site are available in every state and through every advisor listed. Check the background of this firm on FINRA’s BrokerCheck.',
        };
        await client.createOrReplace(settings);
        console.log('Global Settings seeded!');

        // --- 2. Home Page ---
        const imgCoffeeCta = await uploadImage('images/img_coffee-cta.jpg');
        const imgCoffeeCta01 = await uploadImage('images/img_coffee-cta-01.jpg');
        const imgCoffeeCta02 = await uploadImage('images/img_coffee-cta-02.jpg');
        
        const homePage = {
            _id: 'homePage',
            _type: 'homePage',
            heroHeadline: 'Artemis is an independent\nlife insurance advisory.',
            heroSubheadline: 'We don’t sell products. We create solutions. It’s all we do, and we do it better than anyone. Our independence gives us an objective lens, our size keeps us personal, and our mission is simple: make life insurance feel human.',
            missionHeadline: 'THE ARTEMIS MISSION',
            missionCopy: toPortableText('At Artemis, we approach every relationship with both creativity and sensitivity, creating coverage that is personal, purposeful, and perfectly aligned with each client’s individual goals.'),
            missionButtonText: 'LEARN MORE',
            missionButtonLink: '/mission',
            teamHeadline: 'THE ARTEMIS TEAM',
            teamCopy: toPortableText('Founded by Anne Jones, Artemis is small by design, high-touch by choice, and relentless about doing what’s right—for advisors and the clients they serve.'),
            teamButtonText: 'MEET THE TEAM',
            teamButtonLink: '/team',
            teamImages: [
                await uploadImage('images/img_team-home.jpg'),
                await uploadImage('images/img_anne-v2.jpg'),
                await uploadImage('images/img_bianca-v2.jpg'),
                await uploadImage('images/img_lulu-v2.jpg')
            ].filter(Boolean),
            offeringsHeadline: 'THE ARTEMIS OFFERINGS',
            offeringsCopy: toPortableText('Artemis delivers smart, strategic, customized life insurance built to secure families and transfer wealth, annuities that strengthen long-term financial plans, and coverage that keeps life moving when the unexpected hits. Clear guidance. Confident decisions. Protection that works as hard as you do.'),
            offeringsButtonText: 'SEE OUR OFFERINGS',
            offeringsButtonLink: '/offerings',
            advisorHeadline: 'ADVISOR TO THE ADVISORS',
            advisorCopy: toPortableText('While the people who ultimately benefit are the individuals who purchase our products, we focus on building trust with the advisors who guide them. Our best-fit advisors are collaborative, grounded in integrity and empathy, and committed to meaningful long-term relationships rather than transactions. They’re independent thinkers who focus on the people behind the plans, always serving their clients’ best interests—not just the bottom line.'),
            ctaHeadline: 'Life insurance is personal. So are we. Let’s meet for coffee or a cocktail.',
            ctaButtonText: 'CONTACT US',
            ctaButtonLink: '/connect',
            ctaImage: imgCoffeeCta
        };
        await client.createOrReplace(homePage);
        console.log('Home Page seeded!');

        // --- 3. Mission Page ---
        const missionPage = {
            _id: 'missionPage',
            _type: 'missionPage',
            heroHeadline: 'THE ARTEMIS\nMISSION',
            heroImage: await uploadImage('images/img_mission-header.jpg'),
            editorialHeadline: 'We approach every relationship with both creativity and sensitivity, creating coverage that is personal, purposeful, and perfectly aligned with each client’s individual goals.',
            editorialParagraphs: toPortableText([
                'Artemis doesn’t do one-size-fits-all. Instead, we deliver a high-touch service that is smart, forward-thinking, and built to adapt as life evolves. Whether you’re protecting a growing family, planning for the future, or navigating change, we’re here to make the process seamless and simple, ensuring that each plan is not just financially sound but emotionally grounded.',
                'It’s this balance of expertise and empathy, precision and flexibility that turns life insurance from a simple, protective mechanism into a hardworking asset.'
            ]),
            button1Text: 'OUR OFFERINGS',
            button1Link: '/offerings',
            button2Text: 'OUR TEAM',
            button2Link: '/team',
            advisorHeadline: 'ADVISOR TO THE ADVISORS',
            advisorCopy: 'While the people who ultimately benefit are the individuals who purchase our products, we focus on building trust with the advisors who guide them. Our best-fit advisors are collaborative, grounded in integrity and empathy, and committed to meaningful long-term relationships rather than transactions. They’re independent thinkers who focus on the people behind the plans, always serving their clients’ best interests—not just the bottom line.',
            ctaHeadline: 'Life insurance is too personal for a contact form. Let’s meet in person.',
            ctaButtonText: 'CONTACT US',
            ctaButtonLink: '/connect',
            ctaImage: imgCoffeeCta01
        };
        await client.createOrReplace(missionPage);
        console.log('Mission Page seeded!');

        // --- 4. Connect Page ---
        const connectPage = {
            _id: 'connectPage',
            _type: 'connectPage',
            heroHeadline: 'CONNECT\nWITH US',
            heroImage: await uploadImage('images/img_contact-header.jpg'),
            introHeadline: 'We’re here to guide\nyour next step.',
            introCopy: toPortableText('Whether you need new coverage or want a clear read on your current plan, we take the time to understand your goals and design the right solution. Life insurance is too personal for a contact form. We prefer a conversation.'),
        };
        await client.createOrReplace(connectPage);
        console.log('Connect Page seeded!');

        // --- 5. Team Page ---
        const teamPage = {
            _id: 'teamPage',
            _type: 'teamPage',
            heroHeadline: 'THE ARTEMIS\nTEAM',
            heroImage: await uploadImage('images/img_team-header.jpg'),
            introHeadline: 'We didn’t want to wait for the industry to evolve, so we built something better.',
            introParagraphs: toPortableText([
                'After spending years inside the industry and becoming jaded by the way things had always been done, Anne Jones took a well-timed leap of faith in 2021. She founded Artemis to reimagine life insurance—making it independent, human, and genuinely forward-thinking.',
                'Tired of outdated processes and one-size-fits-all products, she set out to build something different—an advisory that creates tailored solutions, builds lasting relationships, and delivers the kind of clarity and confidence clients truly deserve.'
            ]),
            teamListHeadline: 'ARTEMIS TEAM',
            teamMembers: [
                {
                    _key: 'anne',
                    name: 'Anne Jones',
                    title: 'Founder & CEO',
                    image: await uploadImage('images/img_anne.jpg'),
                    fullBio: toPortableText('Anne Jones is the founder and CEO of Artemis. She is responsible for overseeing all aspects of the life insurance process, as well as cultivating new relationships with advisory networks of attorneys, accountants, family offices, and entrepreneurs. Anne leads the strategic decision making and vision for the firm.\n\nAnne has spent the last 20 years in the insurance industry committed to providing objective advice and peerless service. From underwriting to case design and implementation, her focus and priority have always been built on a foundation of service and transparency.\n\nAnne believes in industry involvement and continuing education in the insurance space. She is a member of the Million Dollar Round Table, Finseca, NAIFA, Dallas Estate Planning Council, Texas Wall Street Women, and the Financial Planners Association. Anne is a member of the Communities Foundation of Texas Advisory Council. She is FINRA licensed with her Series 7, 24, 63, and 66, in addition to her General Lines Life and Health license.\n\nAnne is a graduate of the University of Georgia, but after studying and working abroad she found herself returning to Dallas to plant roots and find a career. She has twin 13-year-old boys and two labs. They enjoy golfing together and the beach.'),
                    shortSummary: toPortableText('Anne Jones is the founder and CEO of Artemis. She is responsible for overseeing all aspects of the life insurance process, as well as cultivating new relationships with advisory networks of attorneys, accountants, family offices, and entrepreneurs. Anne leads the strategic decision making and vision for the firm.\n\nAnne has spent the last 20 years in the insurance industry committed to providing objective advice and peerless service. From underwriting to case design and implementation, her focus and priority have always been built on a foundation of service and transparency.'),
                    email: 'afj@artemisdallas.com',
                    linkedInUrl: 'https://www.linkedin.com/in/anne-jones/'
                },
                {
                    _key: 'bianca',
                    name: 'Bianca Admire',
                    title: 'CFP®, CLU, PRINCIPAL',
                    image: await uploadImage('images/img_bianca.jpg'),
                    fullBio: toPortableText('Bianca Admire is a principal at Artemis, participating in client service and firm operations. With over a decade of client service experience and in the financial services industry, Bianca takes pride in providing prompt responses and maintaining long-term relationships with Artemis clients.\n\nShe started her career at UBS Wealth Management and through an Ursuline alumni connection was fortunate to make the leap to an independent life insurance group that later merged with a local RIA. While there she obtained her CFP® and CLU. She is FINRA licensed with her series 7 and 66 and has her General Lines Life and Health license in Texas.\n\nBianca is a graduate of Texas Christian University. She is part of the Board of Governors for the Dallas Estate Planning Council and on the Professional Advisory Council with the Dallas Foundation.'),
                    shortSummary: toPortableText('Bianca Admire is a principal at Artemis, participating in client service and firm operations. With over a decade of client service experience and in the financial services industry, Bianca takes pride in providing prompt responses and maintaining long-term relationships with Artemis clients.'),
                    email: 'aba@artemisdallas.com',
                    linkedInUrl: 'https://www.linkedin.com/in/bianca-admire/'
                },
                {
                    _key: 'lulu',
                    name: 'Lulu Herrick',
                    title: 'Director',
                    image: await uploadImage('images/img_lulu.jpg'),
                    fullBio: toPortableText('Lulu Herrick is a Director at Artemis. She supports Artemis in all facets of the business from underwriting to client service. A recent graduate with a degree in statistics from Southern Methodist University, Lulu brings a fresh analytical perspective to her work. In her role, she collaborates closely with carriers to ensure smooth and accurate policy placement while also assisting with day-to-day client needs and operations. Lulu holds her General Lines Life and Health license. Outside of the office, Lulu enjoys traveling with her family and cooking with friends. She is excited to continue learning and growing within the industry.'),
                    shortSummary: toPortableText('Lulu Herrick is a Director at Artemis. She supports Artemis in all facets of the business from underwriting to client service. A recent graduate with a degree in statistics from Southern Methodist University, Lulu brings a fresh analytical perspective to her work. In her role, she collaborates closely with carriers to ensure smooth and accurate policy placement while also assisting with day-to-day client needs and operations. Lulu holds her General Lines Life and Health license. Outside of the office, Lulu enjoys traveling with her family and cooking with friends. She is excited to continue learning and growing within the industry.'),
                    email: 'alh@artemisdallas.com',
                    linkedInUrl: 'https://www.linkedin.com/in/lulu-herrick-0a22b1206/'
                }
            ],
            ctaHeadline: 'A thoughtful plan starts with a thoughtful conversation. Let’s meet.',
            ctaButtonText: 'CONTACT US',
            ctaButtonLink: '/connect',
            ctaImage: imgCoffeeCta
        };
        await client.createOrReplace(teamPage);
        console.log('Team Page seeded!');

        // --- 6. Offerings Page ---
        const offeringsPage = {
            _id: 'offeringsPage',
            _type: 'offeringsPage',
            heroHeadline: 'THE ARTEMIS\nOFFERINGS',
            heroImage: await uploadImage('images/img_offerings-header.jpg'),
            introHeadline: 'We don’t push policies.\nWe design protection.',
            introCopy: toPortableText('Artemis delivers smart, strategic, customized life insurance built to secure families and transfer wealth, annuities that strengthen long-term financial plans, and coverage that keeps life moving when the unexpected hits. Clear guidance. Confident decisions. Protection that works as hard as you do.'),
            offeringsCategories: [
                {
                    _key: 'insurance',
                    categoryName: 'INSURANCE',
                    products: [
                        'Term Life Insurance',
                        'Whole Life Insurance',
                        'Universal Life Insurance (UL)',
                        'Indexed Universal Life (IUL)',
                        'Variable Universal Life (VUL)*',
                        'Private Placement'
                    ],
                    needs: [
                        'Income Replacement',
                        'Multigenerational Wealth Transfer',
                        'Estate Tax Solutions',
                        'Buy/Sell and Key Man Funding',
                        'Blended Family Planning Tax',
                        'Deferred Growth',
                        'Charitable Gifting',
                        'Cash Value',
                        'Accumulation Premium',
                        'Finance Asset/Credit Protection',
                        'Retirement Planning',
                        'Guaranteed Income'
                    ],
                    disclaimer: toPortableText('*Please consider the investment objectives, risks, charges, expenses, and your need for death benefit coverage carefully before investing in a VUL. The prospectus, which contains this and other information about the variable life policy and the underlying investment options, can be obtained from your financial professional. The investment return and principal value of the variable life policy are not guaranteed. Variable life subaccounts fluctuate with changes in market conditions. The principal may be worth more or less than the original amount invested when the policy is surrendered. Any guarantees offered are backed by the financial strength of the insurance company.')
                },
                {
                    _key: 'annuities',
                    categoryName: 'ANNUITIES',
                    products: [
                        'Single Premium Immediate Annuity (SPIA)',
                        'Fixed Annuity',
                        'Indexed Annuity',
                        'Variable Annuity',
                        'Private Placement Annuity'
                    ],
                    needs: [
                        'Review and improve in-force annuity contracts',
                        'Income and Deferred Annuities'
                    ]
                },
                {
                    _key: 'disability',
                    categoryName: 'DISABILITY & LONG-TERM CARE INSURANCE',
                    products: [
                        'Traditional and Hybrid Long-term Care',
                        'Short- and Long-term Disability Insurance'
                    ],
                    needs: [
                        'Planning for Long-term Illness',
                        'Long-term and Short-term Income Replacement'
                    ]
                }
            ],
            ctaHeadline: 'Complex lives deserve more than a “Tell us about yourself” box. Let’s meet.',
            ctaButtonText: 'CONTACT US',
            ctaButtonLink: '/connect',
            ctaImage: imgCoffeeCta02
        };
        await client.createOrReplace(offeringsPage);
        console.log('Offerings Page seeded!');

        console.log('Seeding complete successfully!');
    } catch (err) {
        console.error('Seeding failed:', err);
    }
}

seed();
