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

            gsap.from('.reveal-up', {
                scrollTrigger: {
                    trigger: '.connect-intro',
                    start: 'top 80%'
                },
                y: 40,
                opacity: 0,
                stagger: 0.15,
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
                title={"CONNECT\nWITH US"}
                image="/images/team/img_contact.webp"
            />

            <section className="connect-intro" style={{ padding: '6rem 0', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div className="reveal-up">
                            <h2 className="serif reveal-wipe" style={{ fontSize: '2.4rem', lineHeight: '1.25', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)', letterSpacing: 'normal', maxWidth: '100%' }}>
                                <span className="reveal-text-wipe connect-title-wipe" style={{ display: 'block' }}>
                                    We&apos;re here to guide<br />your next step.
                                </span>
                            </h2>
                            <div style={{ width: '100px', height: '5px', backgroundColor: 'var(--color-gold)' }}></div>
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
                                    5950 Sherry Ln Suite 420<br />
                                    Dallas, TX 75225
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
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5510626354!2d-96.806540!3d32.857640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9e9f9f9f9f9f%3A0x864e9e9f9f9f9f9f!2s5950%20Sherry%20Ln%20%23420%2C%20Dallas%2C%20TX%2075225!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) contrast(0.6) brightness(1.1) opacity(0.8)', pointerEvents: 'auto' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -100%)',
                                    width: '50px',
                                    height: '50px',
                                    pointerEvents: 'none',
                                    zIndex: 10
                                }}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8z" fill="var(--color-teal)" />
                                        <circle cx="12" cy="8" r="3.5" fill="var(--color-gold)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="simple" />
        </main>
    );
}
