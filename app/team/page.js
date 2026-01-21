'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '../../components/Nav';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';
import Link from 'next/link';
import BioModal from '../../components/BioModal';

gsap.registerPlugin(ScrollTrigger);

function TeamMember({ name, title, bio, summary, image, email, linkedin, onReadMore, delay = 0 }) {
    const memberRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(memberRef.current, {
                scrollTrigger: {
                    trigger: memberRef.current,
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: delay
            });
        }, memberRef);
        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={memberRef} className="team-member">
            <div style={{ aspectRatio: '1/1', background: `url(${image}) center/cover`, filter: 'grayscale(1)', width: '100%' }}></div>
            <div>
                <h3 className="body-lg" style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontWeight: '400', textTransform: 'none', letterSpacing: 'normal' }}>
                    <span style={{ letterSpacing: '0.2rem' }}>{name.toUpperCase()}</span> <span style={{ opacity: 0.8, fontWeight: '300', margin: '0 1rem' }}>|</span> <span style={{ fontStyle: 'italic', opacity: 0.9 }}>{title}</span>
                </h3>
                <p className="body-sm" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
                    {summary ? summary : (bio.length > 280 ? `${bio.substring(0, 280)}...` : bio)}
                </p>
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <a href={`mailto:${email}`} style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                    </a>
                    {onReadMore && (
                        <button
                            onClick={() => onReadMore({ name, title, bio, image, email, linkedin })}
                            className="learn-more body-xs"
                            style={{ color: 'var(--color-gold)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '1rem' }}
                        >
                            READ MORE <span className="learn-more-arrow">&rarr;</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    const contentRef = useRef(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReadMore = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Headline Wipe Reveal (Specific to this page, avoid Hero conflict)
            gsap.to('.team-title-wipe', {
                clipPath: 'inset(0% 0 0 0)',
                y: 0,
                duration: 1.5,
                ease: 'power4.out',
                overwrite: true
            });

            gsap.from('.team-intro .reveal-up', {
                scrollTrigger: {
                    trigger: '.team-intro',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: 'power3.out'
            });
        }, contentRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={contentRef} style={{ backgroundColor: 'var(--color-teal)' }}>
            <Nav />
            <PageHero
                title={"THE ARTEMIS\nTEAM"}
                image="/images/team/img_team.webp"
            />

            <section className="team-intro" style={{ padding: '6rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div>
                            <h2 className="serif reveal-wipe" style={{ fontSize: '2.4rem', lineHeight: '1.4', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)', letterSpacing: 'normal', maxWidth: '100%' }}>
                                <span className="reveal-text-wipe team-title-wipe" style={{ display: 'block' }}>
                                    We didn’t want to wait for the industry to evolve, so we built something better.
                                </span>
                            </h2>
                            <div style={{ width: '100px', height: '5px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div style={{ paddingTop: '1rem' }}>
                            <p className="body-lg reveal-up" style={{ marginBottom: '2.5rem', color: 'var(--color-teal)' }}>
                                After spending years inside the industry and becoming jaded by the way things had always been done, Anne Jones took a well-timed leap of faith in 2021. She founded Artemis to reimagine life insurance—making it independent, human, and genuinely forward-thinking.
                            </p>
                            <p className="body-lg reveal-up" style={{ color: 'var(--color-teal)' }}>
                                Tired of outdated processes and one-size-fits-all products, she set out to build something
                                different—an advisory that creates tailored solutions, builds lasting relationships, and
                                delivers the kind of clarity and confidence clients actually deserve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-list" style={{ padding: '4rem 0', backgroundColor: 'var(--color-teal)' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <h2 className="serif" style={{ fontSize: '1.875rem', color: 'var(--color-gold)', marginBottom: '6rem', letterSpacing: '0.25rem', fontWeight: '400' }}>ARTEMIS TEAM</h2>

                    <TeamMember
                        name="Anne Jones"
                        title="Partner"
                        image="/images/team/img_anne-temp.webp"
                        bio={`Anne Jones is the a Founder and Managing Partner at Artemis Partners. She is responsible for overseeing all aspects of the life insurance process, as well as cultivating new relationships with advisory networks of attorneys, accountants, family offices and entrepreneurs. Anne leads the strategic decision making and vision for the firm.\n\nAnne has spent the last 20 years in the insurance industry committed to providing objective advice and peerless service. From underwriting to case design and implementation, her focus and priority has always been built on a foundation of service and transparency.\n\nAnne believes in industry involvement, as well as continuing education in the insurance space. She is a member of Finseca, NAIFA, Dallas Estate Planning Council, Texas Wall Street Women, National Association of Professional Women, and the Financial Planners Association. Anne is a member of the Subscribers Advisory Committee for Vault Insurance, as well as a member of the Communities Foundation of Texas Advisory Council. She is FINRA licensed with her Series 7, 24, 63, and 66, in addition to her General Lines Life and Health license.\n\nAnne is a graduate of the University of Georgia, but after studying and working abroad she found herself returning to Dallas to plant roots and find a career. She has twin 13 year old boys and two labs. They enjoy golfing together and the beach.`}
                        summary="Anne Jones is the a Founder and Managing Partner at Artemis Partners. She is responsible for overseeing all aspects of the life insurance process, as well as cultivating new relationships with advisory networks of attorneys, accountants, family offices and entrepreneurs. Anne leads the strategic decision making and vision for the firm. Anne has spent the last 20 years in the insurance industry committed to providing objective advice and peerless service. From underwriting to case design and implementation, her focus and priority has always been built on a foundation of service and transparency."
                        email="afj@artemisdallas.com"
                        linkedin="https://www.linkedin.com/in/anne-jones/"
                        onReadMore={handleReadMore}
                    />

                    <TeamMember
                        name="Bianca Admire"
                        title="CFP®, CLU, Principal"
                        image="/images/team/bianca-temp.webp"
                        bio={`Bianca Admire is a Principal with Artemis Partners. She leads post-issue client service and manages operational and marketing efforts with Anne.\n\nWith over a decade of client service experience and 10 years in the financial services industry, Bianca takes pride in providing prompt responses and maintaining long-term relationships with her clients. Her organizational skills and interest in branding led to her participation in Artemis's daily operations and marketing.\n\nShe started her career at UBS Wealth Management and through an Ursuline alumni connection was fortunate to make the leap to an independent life insurance group that later merged with a local RIA. While there she obtained her CFP® and CLU. She is FINRA licensed with her series 7 and 66 and has her General Lines Life and Health license in Texas.\n\nBianca is a graduate of Texas Christian University and a Dallasite from birth. She is part of the Board of Governors for the Dallas Estate Planning Council and on the Professional Advisory Council with the Dallas Foundation. Outside of the office she enjoys spending time with her son Bodie, and miniature schnauzer Mayer.`}
                        summary="Bianca Admire is a Principal with Artemis Partners. She leads post-issue client service and manages operational and marketing efforts with Anne. With over a decade of client service experience and 10 years in the financial services industry, Bianca takes pride in providing prompt responses and maintaining long-term relationships with her clients. Her organizational skills and interest in branding led to her participation in Artemis's daily operations and marketing."
                        email="aba@artemisdallas.com"
                        linkedin="https://www.linkedin.com/in/bianca-admire/"
                        onReadMore={handleReadMore}
                        delay={0.2}
                    />

                    <TeamMember
                        name="Lulu Herrick"
                        title="Associate"
                        image="/images/team/lulu-temp.webp"
                        bio={`Lulu Herrick is an Associate at Artemis Partners. She supports Artemis in all facets of the business from underwriting to client service. A recent graduate with a degree in Statistics from Southern Methodist University, Lulu brings a fresh analytical perspective to her work.\n\nIn her role, she collaborates closely with carriers to ensure smooth and accurate policy placement, while also assisting with day-to-day client needs and operations. Lulu holds her General Lines Life and Health license.\n\nOutside of the office, Lulu enjoys travelling with her family and cooking with friends. She is excited to continue learning and growing within the industry.`}
                        summary={`Lulu Herrick is an Associate at Artemis Partners. She supports Artemis in all facets of the business from underwriting to client service. A recent graduate with a degree in Statistics from Southern Methodist University, Lulu brings a fresh analytical perspective to her work.\n\nIn her role, she collaborates closely with carriers to ensure smooth and accurate policy placement, while also assisting with day-to-day client needs and operations. Lulu holds her General Lines Life and Health license.\n\nOutside of the office, Lulu enjoys travelling with her family and cooking with friends. She is excited to continue learning and growing within the industry.`}
                        email="alh@artemisdallas.com"
                        linkedin="https://www.linkedin.com/in/lulu-herrick-0a22b1206/"
                        delay={0.4}
                    />
                </div>
            </section>

            <section className="contact-cta">
                <div className="contact-cta-image"></div>
                <div className="contact-cta-content">
                    <h3 className="serif" style={{ fontSize: '2.5rem', color: 'white', marginBottom: 'var(--space-4)', textTransform: 'none', lineHeight: '1.2', maxWidth: '480px', margin: '0 0 var(--space-4)', letterSpacing: 'normal' }}>
                        A thoughtful plan starts with a thoughtful conversation. Let&apos;s meet.
                    </h3>
                    <Link href="/connect" className="learn-more" style={{ color: 'white', width: 'fit-content' }}>
                        <span className="cta-text">CONTACT US</span> <span className="learn-more-arrow">&rarr;</span>
                    </Link>
                </div>
            </section>

            <BioModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                member={selectedMember}
            />

            <Footer variant="simple" />
        </main>
    );
}
