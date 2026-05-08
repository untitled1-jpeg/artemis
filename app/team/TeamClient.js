'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Nav from '../../components/Nav';
import PageHero from '../../components/PageHero';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Link from 'next/link';
import BioModal from '../../components/BioModal';
import { PortableText } from '@portabletext/react';

gsap.registerPlugin(ScrollTrigger);

const superscriptText = (text) => {
    if (typeof text !== 'string') return text;
    const parts = text.split('®');
    if (parts.length === 1) return text;
    
    return parts.reduce((acc, part, i) => {
        if (i === parts.length - 1) return [...acc, part];
        return [...acc, part, <sup key={i} style={{ 
            fontSize: '0.6em', 
            verticalAlign: 'baseline', 
            position: 'relative', 
            top: '-0.4em', 
            lineHeight: 0 
        }}>&reg;</sup>];
    }, []);
};

const formatSuperscript = (text) => {
    return superscriptText(text);
};

function TeamMember({ name, title, bio, summary, image, email, linkedin, onReadMore, delay = 0 }) {
    const memberRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(memberRef.current, {
                scrollTrigger: {
                    trigger: memberRef.current,
                    start: 'top 95%',
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
            <div style={{ position: 'relative', aspectRatio: '1/1', width: '100%', overflow: 'hidden' }}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div>
                <h3 style={{ color: 'var(--color-gold)', fontSize: '1.35rem', fontFamily: 'var(--font-sans)', marginBottom: '1.5rem', fontWeight: '400', textTransform: 'none', letterSpacing: 'normal' }}>
                    <span style={{ letterSpacing: '0.15rem' }}>{name.toUpperCase()}</span> <span style={{ opacity: 0.8, fontWeight: '300', margin: '0 0.6rem' }}>|</span> <span style={{ fontStyle: 'italic', opacity: 0.9 }}>{formatSuperscript(title)}</span>
                </h3>
                <div className="body-sm" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
                    {typeof summary === 'string' || typeof bio === 'string' ? (
                        (() => {
                            const textToRender = summary ? summary : (bio.length > 280 ? `${bio.substring(0, 280)}...` : bio);
                            return <p>{formatSuperscript(textToRender)}</p>;
                        })()
                    ) : (
                        <PortableText 
                            value={summary || bio} 
                            components={{
                                block: {
                                    normal: ({children}) => <p style={{marginBottom: '1rem'}}>{children}</p>
                                },
                                text: ({text}) => superscriptText(text)
                            }} 
                        />
                    )}
                </div>
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
                    {onReadMore && bio && (Array.isArray(bio) ? bio.length > 0 : bio.length > 0) && (
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

export default function TeamClient({ data, settings }) {
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

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.team-intro',
                    start: 'top 80%',
                }
            });

            tl.from('.team-intro .reveal-up', {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: 'power3.out'
            }).from('.gold-divider', {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 1.2,
                ease: 'power3.out'
            }, "-=1.0");
        }, contentRef);

        // NUCLEAR OPTION: Manually fix the ® symbol in the DOM after render
        const timer = setTimeout(() => {
            if (contentRef.current) {
                const elements = contentRef.current.querySelectorAll('.team-member p, .team-member h3, .team-member span');
                elements.forEach(el => {
                    if (el.innerHTML.includes('®') && !el.querySelector('.forced-sup')) {
                        el.innerHTML = el.innerHTML.replace(/®/g, '<sup class="forced-sup" style="font-size: 0.8em; vertical-align: baseline; position: relative; top: -0.3em; line-height: 0;">&reg;</sup>');
                    }
                });
            }
        }, 1200); // Wait for page animations to settle

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <main ref={contentRef} style={{ backgroundColor: 'var(--color-teal)' }}>
            <Nav />
            <PageHero
                title={data?.heroHeadline || "THE ARTEMIS\nTEAM"}
                image={data?.heroImage || "/images/img_team-header.jpg"}
                bgPos="top center"
                mobileBgPos="top left"
            />

            <section className="team-intro" style={{ padding: '6rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div>
                            <h2 className="serif reveal-wipe" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)', letterSpacing: 'normal', maxWidth: '100%' }}>
                                <span className="reveal-text-wipe team-title-wipe" style={{ display: 'block' }}>
                                    {data?.introHeadline || "We didn’t want to wait for the industry to evolve, so we built something better."}
                                </span>
                            </h2>
                            <div className="gold-divider" style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div style={{ paddingTop: '1rem' }}>
                            {data?.introParagraphs ? (
                                typeof data.introParagraphs[0] === 'string' ? (
                                    data.introParagraphs.map((paragraph, i) => (
                                        <p key={i} className="body-lg reveal-up" style={{ marginBottom: i < data.introParagraphs.length - 1 ? '2.5rem' : '0', color: 'var(--color-teal)' }}>
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <PortableText 
                                        value={data.introParagraphs} 
                                        components={{
                                            block: {
                                                normal: ({children}) => <p className="body-lg reveal-up" style={{ marginBottom: '2.5rem', color: 'var(--color-teal)' }}>{children}</p>,
                                            },
                                            types: {
                                                text: ({value}) => {
                                                    const text = value.text || "";
                                                    if (text.includes('®')) {
                                                        const parts = text.split('®');
                                                        return parts.reduce((acc, part, i) => {
                                                            if (i === parts.length - 1) return [...acc, part];
                                                            return [...acc, part, <sup key={i}>&reg;</sup>];
                                                        }, []);
                                                    }
                                                    return text;
                                                }
                                            }
                                        }} 
                                    />
                                )
                            ) : (
                                <>
                                    <p className="body-lg reveal-up" style={{ marginBottom: '2.5rem', color: 'var(--color-teal)' }}>
                                        After spending years inside the industry...
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-list" style={{ padding: '4rem 0', backgroundColor: 'var(--color-teal)' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <h2 className="serif" style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '3rem', letterSpacing: '0.25rem', fontWeight: '400' }}>{data?.teamListHeadline || "ARTEMIS TEAM"}</h2>

                    {data?.teamMembers?.map((member, i) => (
                        <TeamMember
                            key={i}
                            name={member.name}
                            title={member.title}
                            image={member.image}
                            bio={member.fullBio}
                            summary={member.shortSummary}
                            email={member.email}
                            linkedin={member.linkedInUrl}
                            onReadMore={handleReadMore}
                            delay={i * 0.2}
                        />
                    ))}
                </div>
            </section>

            <Contact
                variant="gold"
                title={data?.ctaHeadline || "A thoughtful plan starts with a thoughtful conversation. Let’s meet."}
                image={data?.ctaImage || "/images/img_coffee-cta.jpg"}
            />

            <BioModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                member={selectedMember}
            />

            <Footer variant="simple" settings={settings} />
        </main>
    );
}
