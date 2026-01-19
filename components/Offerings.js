'use client';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Offerings() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.icon-box', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                scale: 0,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: 'back.out(1.7)'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="offerings" ref={sectionRef}>
            <div className="container">
                <div className="offerings-grid">
                    <div className="offerings-text">
                        <h2>ARTEMIS OFFERINGS</h2>
                        <p>Artemis delivers smart, strategic, customized life insurance built to secure families and transfer wealth,
                            annuities that strengthen long-term financial plans, and coverage that keeps life moving when the unexpected
                            hits. Clear guidance. Confident decisions. Protection that works as hard as you do.</p>
                        <div className="learn-more" style={{ marginTop: '2rem', color: 'var(--color-gold)' }}>SEE OUR OFFERINGS &rarr;</div>
                    </div>
                    <div className="icon-grid">
                        <div className="icon-box">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M5 10L15 20L5 30M15 10L25 20L15 30" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="icon-box">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M5 35L35 5M35 5H20M35 5V20" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="icon-box">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="15" stroke="white" strokeWidth="2" />
                                <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
