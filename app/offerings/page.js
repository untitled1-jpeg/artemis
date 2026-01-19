'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function OfferingBox({ title, description, delay = 0 }) {
    const boxRef = useRef(null);
    return (
        <div ref={boxRef} className="offering-box" style={{ padding: '3rem', border: '1px solid var(--color-gold)', borderRadius: '2px', backgroundColor: 'transparent' }}>
            <h3 className="serif" style={{ fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '1.5rem', textTransform: 'none' }}>{title}</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-white)', fontWeight: '300', opacity: 0.9, marginBottom: '2rem' }}>{description}</p>
            <div className="learn-more" style={{ color: 'var(--color-gold)', fontSize: '0.85rem' }}>LEARN MORE &rarr;</div>
        </div>
    );
}

function AssessmentStep({ number, title, description }) {
    return (
        <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-gold)', fontVariantNumeric: 'tabular-nums', fontWeight: '500' }}>0{number}</div>
            <div>
                <h4 className="serif" style={{ fontSize: '1.4rem', color: 'var(--color-gold)', marginBottom: '1rem', textTransform: 'none' }}>{title}</h4>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-dark)', fontWeight: '300' }}>{description}</p>
            </div>
        </div>
    );
}

export default function OfferingsPage() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.offering-box', {
                scrollTrigger: {
                    trigger: '.offerings-grid-main',
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
        <main ref={mainRef} style={{ backgroundColor: 'var(--color-teal)' }}>
            <Nav />
            <PageHero
                title="ARTEMIS OFFERINGS"
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
            />

            <section className="offerings-intro" style={{ padding: '10rem 0', backgroundColor: 'var(--color-cream)', color: 'var(--color-teal)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 className="serif" style={{ fontSize: '2.4rem', lineHeight: '1.3', marginBottom: '3rem', textTransform: 'none', fontWeight: '400', color: 'var(--color-gold)' }}>
                                We don’t push policies. <br /> We design protection.
                            </h2>
                            <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--color-gold)' }}></div>
                        </div>
                        <div style={{ paddingTop: '1rem' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: '300' }}>
                                At Artemis, our advice and expertise across individual life insurance, annuities, disability and
                                long-term care are built around one goal: making the complex feel clear and the complicated
                                feel simple.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '300' }}>
                                We work closely with individuals and families—often in conjunction with their existing team
                                of advisors—to design strategies that capture current opportunities while building momentum
                                for whatever comes next.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offerings-grid-main" style={{ padding: '10rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                        <OfferingBox
                            title="LIFE INSURANCE"
                            description="We deliver smart, strategic, customized life insurance that is built to secure families, transfer wealth, and protect everything you've built."
                        />
                        <OfferingBox
                            title="ANNUITIES"
                            description="A thoughtful annuity strategy can supplement your investment portfolio and provide a steady, tax-efficient income stream you'll never outlive."
                        />
                        <OfferingBox
                            title="SPECIAL PROJECTS"
                            description="Our expertise extends to individual disability, long-term care and highly specialized insurance projects tailored for unique circumstances."
                        />
                    </div>
                </div>
            </section>

            <section className="assessment" style={{ padding: '10rem 0', backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '8rem' }}>
                        <div>
                            <h2 className="serif" style={{ fontSize: '1.8rem', color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '0.15em' }}>THE ARTEMIS ASSESSMENT</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-dark)', fontWeight: '300' }}>
                                Our process is designed to bring strategy and structure to your insurance portfolio. We call it The Artemis Assessment.
                            </p>
                        </div>
                        <div>
                            <AssessmentStep
                                number={1}
                                title="Introduction"
                                description="We start by learning about your goals, your current coverage, and your vision for the future."
                            />
                            <AssessmentStep
                                number={2}
                                title="Audit & Analysis"
                                description="We perform a deep-dive review of your existing policies to ensure they are performing as intended."
                            />
                            <AssessmentStep
                                number={3}
                                title="Strategic Design"
                                description="Our team designs a customized plan that bridges the gap between where you are and where you need to be."
                            />
                            <AssessmentStep
                                number={4}
                                title="Implementation"
                                description="We guide you through the process of securing new coverage or optimizing existing plans with precision."
                            />
                            <AssessmentStep
                                number={5}
                                title="On-Going Support"
                                description="As your life evolves, we stay by your side to ensure your protection plan continues to perform."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="offerings-cta" style={{ padding: '10rem 0', backgroundColor: 'var(--color-gold)', textAlign: 'center' }}>
                <div className="container">
                    <h3 className="serif" style={{ fontSize: '2.5rem', color: 'white', marginBottom: '3.5rem', textTransform: 'none', lineHeight: '1.2' }}>
                        Start protecting what matters most. <br /> Let&apos;s talk.
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
