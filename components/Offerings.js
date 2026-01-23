'use client';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Offerings({ data }) {
    const sectionRef = useRef(null);

    const content = {
        title: data?.title || "ARTEMIS OFFERINGS",
        body: data?.body || "Artemis delivers smart, strategic, customized life insurance built to secure families and transfer wealth, annuities that strengthen long-term financial plans, and coverage that keeps life moving when the unexpected hits. Clear guidance. Confident decisions. Protection that works as hard as you do.",
        ctaLabel: data?.ctaLabel || "SEE OUR OFFERINGS"
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation for boxes
            gsap.to('.icon-box', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 90%',
                },
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out'
            });

            // Draw animation for paths
            const paths = sectionRef.current.querySelectorAll('svg path, svg polygon, svg line, svg polyline, svg circle');
            paths.forEach(path => {
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, stroke: 'var(--color-gold)' });
                gsap.to(path, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: 'power2.out',
                    stagger: 0.1
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="offerings" ref={sectionRef}>
            <div className="container">
                <div className="offerings-grid">
                    <div className="offerings-text">
                        <h2 className="serif" style={{ letterSpacing: '0.25rem', marginBottom: 'var(--editorial-gap)' }}>{content.title}</h2>
                        <p style={{ lineHeight: '1.7', marginBottom: 'var(--editorial-gap)' }}>{content.body}</p>
                        <Link href="/offerings" className="learn-more" style={{ color: 'var(--color-gold)', cursor: 'pointer' }}>
                            <span className="cta-text">{content.ctaLabel}</span> <span className="learn-more-arrow">&rarr;</span>
                        </Link>
                    </div>
                    <div className="icon-grid">
                        <div className="icon-box" style={{ opacity: 0 }}>
                            <svg viewBox="0 0 94.23 94.23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                <g>
                                    <polygon points="47.55 47.89 29.89 47.89 17 31.35 34.66 31.35 47.55 47.89" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="65.22 47.89 47.55 47.89 34.66 31.35 52.33 31.35 65.22 47.89" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="82.88 47.89 65.22 47.89 52.33 31.35 69.99 31.35 82.88 47.89" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="52.33 64.48 69.99 64.48 82.88 47.94 65.22 47.94 52.33 64.48" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="34.66 64.48 52.33 64.48 65.22 47.94 47.55 47.94 34.66 64.48" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <polygon points="17 64.48 34.66 64.48 47.55 47.94 29.89 47.94 17 64.48" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                    <circle cx="47.11" cy="47.11" r="46.42" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.38" />
                                </g>
                            </svg>
                        </div>
                        <div className="icon-box" style={{ opacity: 0 }}>
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
                        <div className="icon-box" style={{ opacity: 0 }}>
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
                </div>
            </div>
        </section>
    );
}
