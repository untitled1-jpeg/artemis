'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectPage() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.location-card', {
                scrollTrigger: {
                    trigger: '.locations-grid',
                    start: 'top 80%'
                },
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power3.out'
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} style={{ backgroundColor: 'var(--color-cream)' }}>
            <Nav />
            <PageHero
                title="CONNECT WITH US"
                image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
            />

            <section className="connect-intro" style={{ padding: '10rem 0', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 className="serif" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)' }}>
                                We’re here to guide your next step.
                            </h2>
                            <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div style={{ paddingTop: '1rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: '300' }}>
                                Whether you need new coverage or want a clear read on your current plan, we take the time to
                                understand your goals and design the right solution. Life insurance is too personal for a
                                contact form. We prefer a conversation.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="mailto:info@artemis-partners.com" className="learn-more" style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>info@artemis-partners.com &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="locations-grid" style={{ padding: '0 0 10rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div className="location-card" style={{ padding: '4rem', backgroundColor: 'var(--color-teal)', color: 'white' }}>
                            <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '2rem', textTransform: 'none' }}>ST. LOUIS</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', fontWeight: '300' }}>
                                7733 Forsyth Blvd. <br />
                                Suite 1100 <br />
                                St. Louis, MO 63105
                            </p>
                            <div style={{ marginTop: '2rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        </div>
                        <div className="location-card" style={{ padding: '4rem', backgroundColor: 'var(--color-teal)', color: 'white' }}>
                            <h3 className="serif" style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '2rem', textTransform: 'none' }}>PALM BEACH</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', fontWeight: '300' }}>
                                100 Royal Palm Way <br />
                                Suite 250 <br />
                                Palm Beach, FL 33480
                            </p>
                            <div style={{ marginTop: '2rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-placeholder" style={{ height: '50vh', background: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200") center/cover', filter: 'grayscale(1)' }}>
            </section>

            <Footer />
        </main>
    );
}
