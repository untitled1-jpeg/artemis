'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

function OfferingBand({ title, features, needsTitle, needs, bgColor, textColor = 'var(--color-white)', bulletColor = 'var(--color-gold)', featureSize = '1.125rem', featureClass = "", footnote = null }) {
    const bandRef = useRef(null);
    const titleRef = useRef(null);
    const listRef = useRef(null);
    const needsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bandRef.current,
                    start: 'top 85%',
                }
            });

            tl.from(titleRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from(listRef.current.querySelectorAll('li'), {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, "-=0.6")
                .from(needsRef.current, {
                    opacity: 0,
                    x: 20,
                    duration: 1.2,
                    ease: 'power2.out'
                }, "-=0.4");
        }, bandRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={bandRef} style={{ backgroundColor: bgColor, color: textColor, padding: '4rem 0' }}>
            <div className="container">
                <div className="offering-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.85fr) minmax(0, 1fr)',
                    gap: '2rem'
                }}>
                    <div>
                        <h2 ref={titleRef} className="serif" style={{ color: textColor, marginBottom: '2.5rem', fontSize: '1.875rem', fontWeight: '400', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{title}</h2>
                        <ul ref={listRef} className={`square-bullets ${featureClass}`} style={{ opacity: 0.9, '--bullet-color': bulletColor, fontSize: featureSize, lineHeight: '1.2' }}>
                            {features.map((f, i) => <li key={i} style={{ marginBottom: '0.6rem' }}>{f}</li>)}
                        </ul>
                        {footnote && (
                            <div style={{ marginTop: '2rem', fontSize: '11px', lineHeight: '1.6', opacity: 0.6, maxWidth: '600px' }}>
                                {footnote}
                            </div>
                        )}
                    </div>
                    <div ref={needsRef} style={{ borderLeft: `1px solid ${textColor}`, paddingLeft: '30px', opacity: 0.8 }}>
                        <h3 className="body-lg" style={{ color: textColor, marginBottom: '1.5rem', fontWeight: '400', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{needsTitle}</h3>
                        <ul className="body-md" style={{ listStyle: 'none', padding: 0, lineHeight: '1.3' }}>
                            {needs.map((n, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>{n}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function OfferingsPage() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const introTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.offerings-bands',
                    start: 'top 80%'
                }
            });

            introTl.from('.reveal-up', {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: 'power3.out'
            }).from('.gold-divider', {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 1.2,
                ease: 'power3.out'
            }, "-=1.0");

            gsap.from('.assessment-icon', {
                scrollTrigger: {
                    trigger: '.assessment',
                    start: 'top 80%'
                },
                scale: 0.8,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'back.out(1.7)'
            });

            // Drawing animation for assessment icons
            const assessmentPaths = mainRef.current.querySelectorAll('.assessment-icon svg path, .assessment-icon svg polygon, .assessment-icon svg line, .assessment-icon svg polyline, .assessment-icon svg circle');
            assessmentPaths.forEach(path => {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
                gsap.to(path, {
                    scrollTrigger: {
                        trigger: '.assessment',
                        start: 'top 70%',
                    },
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power2.out',
                    stagger: 0.1
                });
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} style={{ backgroundColor: 'var(--color-cream)' }}>
            <Nav />
            <PageHero title={"ARTEMIS\nOFFERINGS"} image="/images/team/img_offerings.webp" bgPos="top center" />

            {/* Intro Section */}
            <section className="offerings-intro" style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
                <div className="container">
                    <div className="editorial-layout">
                        <div>
                            <h2 className="serif" style={{ fontSize: '2.4rem', lineHeight: '1.3', color: 'var(--color-gold)', fontWeight: '400', textTransform: 'none', letterSpacing: 'normal' }}>
                                We don’t push policies. <br /> We design protection.
                            </h2>
                            <div className="gold-divider" style={{ width: '100px', height: '4px', backgroundColor: 'var(--color-gold)', marginTop: '2rem' }}></div>
                        </div>
                        <div>
                            <p className="body-lg" style={{ color: 'var(--color-teal)' }}>
                                Artemis delivers smart, strategic, customized life insurance built to secure families and transfer wealth, annuities that strengthen long-term financial plans, and coverage that keeps life moving when the unexpected hits. Clear guidance. Confident decisions. Protection that works as hard as you do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Bands */}
            <div className="offerings-bands">
                <OfferingBand
                    title="INSURANCE"
                    bgColor="var(--color-teal)"
                    bulletColor="var(--color-white)"
                    featureSize="1.875rem"
                    featureClass="serif"
                    features={[
                        "Term Life Insurance",
                        "Whole Life Insurance",
                        "Universal Life Insurance (UL)",
                        "Indexed Universal Life (IUL)",
                        "Variable Universal Life (VUL)*",
                        "Private Placement"
                    ]}
                    needsTitle="NEEDS"
                    needs={[
                        "Income Replacement",
                        "Multi-generational Wealth Transfer",
                        "Estate Tax Solutions",
                        "Buy/Sell and Key-man Funding",
                        "Blended Family Planning",
                        "Tax Deferred Growth",
                        "Charitable Gifting",
                        "Cash Value Accumulation",
                        "Premium Finance",
                        "Asset/Credit Protection",
                        "Retirement Planning",
                        "Guaranteed Income"
                    ]}
                    footnote="*Please consider the investment objectives, risks, charges, expenses, and your need for death-benefit coverage carefully before investing in a VUL. The prospectus, which contains this and other information about the variable life policy and the underlying investment options, can be obtained from your financial professional. The investment return and principal value of the variable life policy are not guaranteed. Variable life sub-accounts fluctuate with changes in market conditions. The principal may be worth more or less than the original amount invested when the policy is surrendered. Any guarantees offered are backed by the financial strength of the insurance company."
                />

                <OfferingBand
                    title="ANNUITIES"
                    bgColor="var(--color-gold)"
                    textColor="var(--color-white)"
                    bulletColor="var(--color-white)"
                    featureSize="1.875rem"
                    featureClass="serif"
                    features={[
                        "Review and improve in-force annuity contracts",
                        "Income and Deferred Annuities"
                    ]}
                    needsTitle="TYPES"
                    needs={[
                        "Single Premium Immediate Annuity (SPIA)",
                        "Fixed Annuity",
                        "Indexed Annuity",
                        "Variable Annuity",
                        "Private Placement Annuity"
                    ]}
                />

                <OfferingBand
                    title="DISABILITY & LONG-TERM CARE INSURANCE"
                    bgColor="var(--color-steel)"
                    bulletColor="var(--color-white)"
                    featureSize="1.875rem"
                    featureClass="serif"
                    features={[
                        "Traditional and Hybrid Long-term Care",
                        "Short and Long-term Disability Insurance"
                    ]}
                    needsTitle="NEEDS"
                    needs={[
                        "Planning for Long-term Illness",
                        "Long-term and Short-term Income Replacement"
                    ]}
                />
            </div>

            {/* Redesigned Assessment Section */}
            <section className="assessment" style={{ padding: '4rem 0', backgroundColor: 'var(--color-cream)', textAlign: 'center', color: 'var(--color-gold)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2rem' }}>
                        {/* Discovery Icon */}
                        <div className="assessment-icon" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg viewBox="0 0 94.23 94.23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <g>
                                    <polygon points="47.55 47.89 29.89 47.89 17 31.35 34.66 31.35 47.55 47.89" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="65.22 47.89 47.55 47.89 34.66 31.35 52.33 31.35 65.22 47.89" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="82.88 47.89 65.22 47.89 52.33 31.35 69.99 31.35 82.88 47.94" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="52.33 64.48 69.99 64.48 82.88 47.94 65.22 47.94 52.33 64.48" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="34.66 64.48 52.33 64.48 65.22 47.94 47.55 47.94 34.66 64.48" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="17 64.48 34.66 64.48 47.55 47.94 29.89 47.94 17 64.48" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <circle cx="47.11" cy="47.11" r="46.42" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                </g>
                            </svg>
                        </div>
                        {/* Analysis Icon */}
                        <div className="assessment-icon" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg viewBox="0 0 94.23 94.23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <g>
                                    <path d="M2.35,39.64c32.51,0,47.52-8.52,58.07-26.55" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" strokeDasharray="6.53" />
                                    <line x1="79.23" y1="49.1" x2="2.01" y2="49.1" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polyline points="64.36 42.85 79.36 49.15 64.36 55.45" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polyline points="46.74 21.3 60.61 12.8 56.97 28.66" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <path d="M2.35,58.18c32.51,0,47.52,8.52,58.07,26.55" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" strokeDasharray="6.53" />
                                    <polyline points="46.74 76.52 60.61 85.03 56.97 69.17" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <circle cx="47.11" cy="47.11" r="46.42" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                </g>
                            </svg>
                        </div>
                        {/* Alignment Icon */}
                        <div className="assessment-icon" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg viewBox="0 0 94.23 94.23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <g>
                                    <circle cx="47.83" cy="47.14" r="24.2" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <circle cx="47.83" cy="47.14" r="14.04" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <circle cx="47.83" cy="47.14" r="5.73" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polyline points="11.33 77.26 24.48 64.12 30.81 70.45 17.66 83.6" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <circle cx="47.11" cy="47.11" r="46.42" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    <h2 className="serif" style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.25rem', fontWeight: '400', lineHeight: '1.25' }}>
                        ARTEMIS ASSESSMENT™
                    </h2>

                    <p className="body-md" style={{ color: 'var(--color-teal)', opacity: 0.8, marginBottom: '3rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        The Artemis Assessment is a structured, yet conversational review of your goals, obligations, and the financial architecture that supports them. We gather the essential data and documentation to understand your full picture, then analyze where your current coverage aligns—or falls short—of what you truly need. This is how we determine the right plan for you: through clarity, evidence, and thoughtful insight, not product pushing. The result is a clear, strategic roadmap that strengthens protection and supports the life you’re building.
                    </p>

                    <Link href="/connect" className="learn-more body-xs" style={{ color: 'var(--color-gold)', width: 'fit-content', margin: '0 auto' }}>
                        <span className="cta-text">REQUEST AN ASSESSMENT</span> <span className="learn-more-arrow">&rarr;</span>
                    </Link>
                </div>
            </section>

            <Contact
                variant="gold"
                title="Complex lives deserve more than a “Tell us about yourself” box. Let’s meet."
                image="/images/team/img_coffee.webp"
            />

            <Footer variant="simple" />
        </main>
    );
}
