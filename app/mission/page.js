'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Advisor from '@/components/Advisor';

gsap.registerPlugin(ScrollTrigger);

export default function MissionPage() {
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animations for splits
            gsap.from('.reveal-up', {
                scrollTrigger: {
                    trigger: '.mission-editorial',
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: 'power3.out'
            });
        }, contentRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={contentRef}>
            <Nav />
            <PageHero
                title="THE ARTEMIS MISSION"
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            />

            <section className="mission-editorial" style={{ padding: '10rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>
                        <div className="reveal-up">
                            <h2 className="serif" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)' }}>
                                We approach every relationship with both creativity and sensitivity, creating coverage that is personal, purposeful and perfectly aligned with each client’s individual goals.
                            </h2>
                            <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div className="reveal-up" style={{ paddingTop: '1rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: '300' }}>
                                Artemis doesn’t do one-size-fits all. Instead, we deliver a high-touch service that is smart,
                                forward-thinking and built to adapt as life evolves. Whether protecting a growing family,
                                planning for the future, or navigating change, we’re here to make the process seamless and
                                simple, ensuring each plan is not just financially sound, but emotionally grounded.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '4rem', fontWeight: '300' }}>
                                It’s this balance of expertise and empathy, precision and flexibility that turns life insurance
                                from a simple, protective mechanism into a hardworking asset.
                            </p>
                            <div className="links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <Link href="/offerings" className="learn-more" style={{ color: 'var(--color-gold)', fontSize: '0.85rem' }}>OUR OFFERINGS &rarr;</Link>
                                <Link href="/team" className="learn-more" style={{ color: 'var(--color-gold)', fontSize: '0.85rem' }}>OUR TEAM &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Advisor />

            <section className="contact-cta" style={{ padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--color-slate)' }}>
                <div style={{ background: "url('https://images.unsplash.com/photo-1453614512568-c4f24d31c2c7?auto=format&fit=crop&q=80&w=1000') center/cover", filter: 'grayscale(1)', minHeight: '50vh' }}></div>
                <div style={{ padding: '8rem 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--color-gold)' }}>
                    <div className="split-content-anchor">
                        <h3 className="serif" style={{ fontSize: '2.4rem', marginBottom: '3rem', textTransform: 'none', color: 'white', lineHeight: '1.2' }}>
                            Life insurance is too personal for a contact form. Let’s meet in person.
                        </h3>
                        <Link href="/connect" className="learn-more" style={{ color: 'white', borderBottom: '1px solid white', paddingBottom: '2px', width: 'fit-content' }}>
                            CONTACT US &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
