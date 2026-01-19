'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function TeamMember({ name, title, bio, image, delay = 0 }) {
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
                duration: 1.5,
                ease: 'power3.out',
                delay: delay
            });
        }, memberRef);
        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={memberRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', marginBottom: '8rem', alignItems: 'flex-start' }}>
            <div style={{ aspectRatio: '1/1.2', background: `url(${image}) center/cover`, filter: 'grayscale(1)' }}></div>
            <div>
                <h3 className="serif" style={{ fontSize: '1.2rem', color: 'var(--color-gold)', marginBottom: '0.5rem', letterSpacing: '0.15em' }}>
                    {name.toUpperCase()} <span style={{ color: 'var(--color-slate)', fontStyle: 'italic', fontWeight: '300', textTransform: 'none', marginLeft: '1rem' }}>| {title}</span>
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-white)', opacity: 0.9, fontWeight: '300' }}>
                    {bio}
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                    <div className="icon-link" style={{ color: 'var(--color-gold)', fontSize: '0.8rem', cursor: 'pointer' }}>EMAIL</div>
                    <div className="icon-link" style={{ color: 'var(--color-gold)', fontSize: '0.8rem', cursor: 'pointer' }}>LINKEDIN</div>
                    <Link href="/connect" className="learn-more" style={{ color: 'var(--color-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>READ MORE &rarr;</Link>
                </div>
            </div>
        </div>
    );
}

export default function TeamPage() {
    return (
        <main style={{ backgroundColor: 'var(--color-teal)' }}>
            <Nav />
            <PageHero
                title="THE ARTEMIS TEAM"
                image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
            />

            <section className="team-intro" style={{ padding: '10rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 className="serif" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)' }}>
                                We didn’t want to wait for the industry to evolve, so we built something better.
                            </h2>
                            <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div style={{ paddingTop: '1rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: '300' }}>
                                After spending years inside the industry and becoming jaded by the way things had always been done,
                                Anne Jones took a well-timed leap of faith in 2021. She founded Artemis to reimagine life
                                insurance—making it independent, human, and genuinely forward-thinking.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '300' }}>
                                Tired of outdated processes and one-size-fits-all products, she set out to build something
                                different—an advisory that creates tailored solutions, builds lasting relationships, and
                                delivers the kind of clarity and confidence clients actually deserve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-list" style={{ padding: '10rem 0' }}>
                <div className="container">
                    <h2 className="serif" style={{ fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '5rem', letterSpacing: '0.2em' }}>ARTEMIS TEAM</h2>

                    <TeamMember
                        name="Anne Jones"
                        title="Partner"
                        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                        bio="Anne Jones is a Founder and Managing Partner at Artemis Partners. She is responsible for overseeing all aspects of the life insurance process, as well as cultivating new relationships with advisory networks of attorneys, accountants, family offices and entrepreneurs. Anne leads the strategic decision making and vision for the firm."
                    />

                    <TeamMember
                        name="Bianca Admire"
                        title="CFP®, CLU, Principal"
                        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                        bio="Bianca Admire is a Principal with Artemis Partners. She leads post-issue client service and manages operational and marketing efforts with Anne. With over 10 years of client service experience and 7 years in the financial services industry, Bianca takes pride in providing prompt responses."
                    />

                    <TeamMember
                        name="Lulu Herrick"
                        title="Associate"
                        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
                        bio="Lulu Herrick is an Associate at Artemis Partners. She supports Artemis in all facets of the business from underwriting to client service. A recent graduate with a degree in Statistics from Southern Methodist University, Lulu brings a fresh analytical perspective to her work."
                    />
                </div>
            </section>

            <section className="team-cta" style={{ padding: '10rem 0', backgroundColor: 'var(--color-gold)', textAlign: 'center' }}>
                <div className="container">
                    <h3 className="serif" style={{ fontSize: '2.5rem', color: 'white', marginBottom: '3.5rem', textTransform: 'none', lineHeight: '1.2' }}>
                        A thoughtful plan starts with <br /> a thoughtful conversation. Let&apos;s meet.
                    </h3>
                    <Link href="/connect" className="learn-more" style={{ color: 'white', borderBottom: '1px solid white', paddingBottom: '2px', width: 'fit-content', margin: '0 auto' }}>
                        CONTACT US &rarr;
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
