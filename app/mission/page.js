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

gsap.registerPlugin(ScrollTrigger);

export default function MissionPage() {
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
                title={"THE ARTEMIS\nMISSION"}
                image="/images/team/img_mission.webp"
            />

            <section className="mission-editorial" style={{ padding: '6rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div className="reveal-up">
                            <h2 className="serif reveal-wipe" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)', letterSpacing: 'normal', maxWidth: '100%' }}>
                                <span className="reveal-text-wipe editorial-title-wipe" style={{ display: 'block' }}>
                                    We approach every relationship with both creativity and sensitivity, creating coverage that is personal, purposeful and perfectly aligned with each client’s individual goals.
                                </span>
                            </h2>
                            <div className="gold-divider" style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div className="reveal-up" style={{ paddingTop: '1rem' }}>
                            <p className="body-lg" style={{ marginBottom: 'var(--space-3)', color: 'var(--color-teal)' }}>
                                Artemis doesn’t do one-size-fits all. Instead, we deliver a high-touch service that is smart,
                                forward-thinking and built to adapt as life evolves. Whether protecting a growing family,
                                planning for the future, or navigating change, we’re here to make the process seamless and
                                simple, ensuring each plan is not just financially sound, but emotionally grounded.
                            </p>
                            <p className="body-lg" style={{ marginBottom: 'var(--space-3)', color: 'var(--color-teal)' }}>
                                It’s this balance of expertise and empathy, precision and flexibility that <span style={{ fontStyle: 'italic', fontWeight: '500' }}>turns life insurance from a simple, protective mechanism into a hardworking asset.</span>
                            </p>
                            <div className="links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <Link href="/offerings" className="learn-more body-xs" style={{ color: 'var(--color-gold)' }}><span className="cta-text">OUR OFFERINGS</span> <span className="learn-more-arrow">&rarr;</span></Link>
                                <Link href="/team" className="learn-more body-xs" style={{ color: 'var(--color-gold)' }}><span className="cta-text">OUR TEAM</span> <span className="learn-more-arrow">&rarr;</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Advisor variant="dark" />

            <Contact
                variant="gold"
                title="Life insurance is too personal for a contact form. Let’s meet in person."
                image="/images/team/img_coffee.webp"
            />
            <Footer variant="simple" />
        </main>
    );
}
