'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-cream)' }} />
});

export default function ConnectPage() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Headline Wipe Reveal
            gsap.to('.connect-title-wipe', {
                scrollTrigger: {
                    trigger: '.connect-intro',
                    start: 'top 80%'
                },
                clipPath: 'inset(0% 0 0 0)',
                y: 0,
                duration: 1.5,
                ease: 'power4.out',
                overwrite: true
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.connect-intro',
                    start: 'top 80%'
                }
            });

            tl.from('.reveal-up', {
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
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} style={{ backgroundColor: 'var(--color-cream)' }}>
            <Nav />
            <PageHero
                title={"CONNECT\nWITH US"}
                image="/images/team/img_contact.webp"
            />

            <section className="connect-intro" style={{ padding: '6rem 0', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div className="reveal-up">
                            <h2 className="serif reveal-wipe" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)', letterSpacing: 'normal', maxWidth: '100%' }}>
                                <span className="reveal-text-wipe connect-title-wipe" style={{ display: 'block' }}>
                                    We’re here to guide<br />your next step.
                                </span>
                            </h2>
                            <div className="gold-divider" style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div className="reveal-up" style={{ paddingTop: '1rem' }}>
                            <p className="body-lg" style={{ color: 'var(--color-teal)' }}>
                                Whether you need new coverage or want a clear read on your current plan, we take the time to
                                understand your goals and design the right solution. Life insurance is too personal for a
                                contact form. We prefer a conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-info" style={{ backgroundColor: 'var(--color-gold)', color: 'white', padding: '4rem 0' }}>
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="reveal-up" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div>
                                <h3 className="serif" style={{ fontSize: '1.875rem', marginBottom: '0.6rem', letterSpacing: '0.1em', lineHeight: '1.25', fontWeight: '500' }}>IN PERSON</h3>
                                <p className="serif" style={{ fontSize: '1.875rem', opacity: 0.9, lineHeight: '1.2' }}>
                                    2750 Fairmount<br />
                                    Dallas, TX 75201
                                </p>
                            </div>

                            <div>
                                <h3 className="serif" style={{ fontSize: '1.875rem', marginBottom: '0.6rem', letterSpacing: '0.1em', lineHeight: '1.25', fontWeight: '500' }}>CALL</h3>
                                <p className="serif" style={{ fontSize: '1.875rem', opacity: 0.9, lineHeight: '1.2' }}>
                                    214.123.4567
                                </p>
                            </div>

                            <div>
                                <h3 className="serif" style={{ fontSize: '1.875rem', marginBottom: '0.6rem', letterSpacing: '0.1em', lineHeight: '1.25', fontWeight: '500' }}>EMAIL</h3>
                                <p className="serif" style={{ fontSize: '1.875rem', opacity: 0.9, lineHeight: '1.2' }}>
                                    contact@artemisdallas.com
                                </p>
                            </div>
                        </div>

                        <div className="reveal-up" style={{ border: '2px solid var(--color-teal)' }}>
                            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', backgroundColor: 'var(--color-cream)' }}>
                                <InteractiveMap />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="simple" />
        </main>
    );
}
