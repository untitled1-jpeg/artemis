'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Advisor({ data, variant = 'light' }) {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const isDark = variant === 'dark';

    const content = {
        title: data?.title || "ADVISOR TO THE ADVISORS",
        body: data?.body || "While the people who ultimately benefit are the individuals who purchase our products, we focus on building trust with the advisors who guide them. Our best-fit advisors are collaborative, grounded in integrity and empathy, and committed to meaningful, long-term relationships rather than transactions. They’re independent thinkers who focus on the people behind the plans, always serving their clients’ best interests — not just the bottom line.",
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Title Wipe Reveal
            gsap.to('.advisor-title-wipe', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                clipPath: 'inset(0% 0 0 0)',
                y: 0,
                duration: 1.2,
                ease: 'power4.out'
            });

            // Body Fade In
            gsap.from('.advisor-body', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 20,
                duration: 1.5,
                delay: 0.4,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="advisor" ref={sectionRef}
            style={{
                background: isDark ? 'var(--color-teal)' : '#f6f5f0',
                color: isDark ? 'var(--color-white)' : 'var(--color-teal)',
                textAlign: 'center',
                padding: '6rem 0'
            }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="advisor-content" ref={contentRef}>
                    <h2 className="serif reveal-wipe" style={{ color: 'var(--color-gold)', fontSize: '40.5px', marginBottom: 'var(--editorial-gap)', letterSpacing: '0.25rem' }}>
                        <span className="reveal-text-wipe advisor-title-wipe" style={{ display: 'block' }}>{content.title}</span>
                    </h2>
                    <p className="advisor-body" style={{ color: isDark ? 'var(--color-white)' : 'var(--color-teal)', opacity: isDark ? 0.9 : 1 }}>{content.body}</p>
                </div>
            </div>
        </section>
    );
}
