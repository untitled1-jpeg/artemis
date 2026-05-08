'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Advisor from '@/components/Advisor';
import { PortableText } from '@portabletext/react';

gsap.registerPlugin(ScrollTrigger);

const superscriptText = (text) => {
    if (typeof text !== 'string') return text;
    if (!text.includes('®')) return text;
    const parts = text.split('®');
    return parts.reduce((acc, part, i) => {
        if (i === parts.length - 1) return [...acc, part];
        return [...acc, part, <sup key={i}>&reg;</sup>];
    }, []);
};

export default function MissionClient({ data, settings }) {
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animations for splits
            // Headline Wipe Reveal
            gsap.to('.editorial-title-wipe', {
                scrollTrigger: {
                    trigger: '.mission-editorial',
                    start: 'top 70%',
                },
                clipPath: 'inset(0% 0 0 0)',
                y: 0,
                duration: 1.5,
                ease: 'power4.out',
                overwrite: true
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.mission-editorial',
                    start: 'top 70%',
                }
            });

            tl.from('.reveal-up', {
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: 'power3.out'
            }).from('.gold-divider', {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 1.5,
                ease: 'power3.out'
            }, "-=1.2");
        }, contentRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={contentRef}>
            <Nav />
            <PageHero
                title={data?.heroHeadline || "THE ARTEMIS\nMISSION"}
                image={data?.heroImage || "/images/img_mission-header.jpg"}
            />

            <section className="mission-editorial" style={{ padding: '6rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div className="reveal-up">
                            <h2 className="serif reveal-wipe" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)', letterSpacing: 'normal', maxWidth: '100%' }}>
                                <span className="reveal-text-wipe editorial-title-wipe" style={{ display: 'block' }}>
                                    {data?.editorialHeadline || "We approach every relationship with both creativity and sensitivity..."}
                                </span>
                            </h2>
                            <div className="gold-divider" style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div className="reveal-up" style={{ paddingTop: '1rem' }}>
                            {data?.editorialParagraphs ? (
                                typeof data.editorialParagraphs[0] === 'string' ? (
                                    data.editorialParagraphs.map((paragraph, i) => (
                                        <p key={i} className="body-lg" style={{ marginBottom: 'var(--space-3)', color: 'var(--color-teal)' }}>
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <PortableText 
                                        value={data.editorialParagraphs} 
                                        components={{
                                            block: {
                                                normal: ({children}) => <p className="body-lg" style={{ marginBottom: 'var(--space-3)', color: 'var(--color-teal)' }}>{children}</p>,
                                            },
                                            text: ({text}) => superscriptText(text)
                                        }} 
                                    />
                                )
                            ) : (
                                <p className="body-lg" style={{ marginBottom: 'var(--space-3)', color: 'var(--color-teal)' }}>
                                    Artemis doesn’t do one-size-fits all...
                                </p>
                            )}
                            <div className="links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <Link href={data?.button1Link || "/offerings"} className="learn-more body-xs" style={{ color: 'var(--color-gold)' }}><span className="cta-text">{data?.button1Text || "OUR OFFERINGS"}</span> <span className="learn-more-arrow">&rarr;</span></Link>
                                <Link href={data?.button2Link || "/team"} className="learn-more body-xs" style={{ color: 'var(--color-gold)' }}><span className="cta-text">{data?.button2Text || "OUR TEAM"}</span> <span className="learn-more-arrow">&rarr;</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Advisor variant="dark" data={{ title: data?.advisorHeadline, body: data?.advisorCopy }} />

            <Contact
                variant="gold"
                title={data?.ctaHeadline || "Life insurance is too personal for a contact form. Let’s meet in person."}
                image={data?.ctaImage || "/images/img_coffee-cta-01.jpg"}
            />
            <Footer variant="simple" settings={settings} />
        </main>
    );
}
