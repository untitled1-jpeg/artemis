'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Advisor() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.advisor .container > *', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 30,
                duration: 1.5,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="advisor" ref={sectionRef}
            style={{ background: 'var(--color-cream)', color: 'var(--color-teal)', textAlign: 'center', padding: '10rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="serif"
                    style={{ color: 'var(--color-gold)', fontSize: '1.2rem', marginBottom: '3rem', letterSpacing: '0.25em' }}>ADVISOR TO THE
                    ADVISOR</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '300' }}>While the people who ultimately benefit are the
                    individuals who purchase our products, we focus on building trust with the advisors who guide them. Our best-fit
                    advisors are collaborative, grounded in integrity and empathy, and committed to meaningful, long-term
                    relationships rather than transactions. They&apos;re independent thinkers who focus on the people behind the plans,
                    always serving their clients&apos; best interests—not just the bottom line.</p>
            </div>
        </section>
    );
}
